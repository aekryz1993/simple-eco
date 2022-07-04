import { ForbiddenError, UserInputError } from "apollo-server-core";
import jwt from "jsonwebtoken";
import { APP_SECRET } from "../utils";
import { subscriptions } from "./Subscription";
import { v4 as uuid } from "uuid";

async function login(_, { username }, { prisma }) {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    throw new Error("No such user found");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function createOrFindBag(
  _,
  { anonymousId },
  { prisma, userId, userRole }
) {
  const bag = userId
    ? await prisma.bag.findUnique({
        where: { userId },
      })
    : anonymousId
    ? await prisma.bag.findUnique({
        where: { anonymousId },
      })
    : null;
  if (bag) return bag;
  if (!userId && !userRole) {
    let expires = new Date(Date.now());
    expires.setDate(expires.getDate() + 1);
    const newBag = await prisma.bag.create({
      data: {
        anonymousId: uuid(),
        expires,
        inSession: true,
      },
    });
    return newBag;
  } else if (userId && userRole === "Consumer")
    return await prisma.bag.create({
      userId: {
        connect: {
          id: userId,
        },
      },
    });
  throw new ForbiddenError("This operation is forbidden for Admin");
}

async function addItemToBag(
  _,
  { productId, anonymousId, quantity, size },
  { prisma, userId }
) {
  const bag = userId
    ? await prisma.bag.findUnique({
        where: { userId },
      })
    : anonymousId
    ? await prisma.bag.findUnique({
        where: { anonymousId },
      })
    : null;
  if (!bag) throw new UserInputError("Bag Doesn't exist");
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!product) throw new UserInputError("Product Doesn't exist");
  const bagItem = await prisma.bagItem.create({
    data: {
      quantity,
      size,
      product: { connect: { id: productId } },
      bag: { connect: { id: bag.id } },
    },
  });

  return bagItem;
}

async function createOrder(
  _,
  { username, phone, totalPrice, orderItems },
  { prisma, pubsub, userId, userRole }
) {
  const consumerName =
    username ||
    (await prisma.user.findUnique({ where: { id: userId } }).username());

  const createdOrder =
    (!userId || userRole === "Consumer") &&
    (await prisma.order.create({
      data: {
        consumerName,
        phone,
        totalPrice,
      },
    }));

  if (createOrder) {
    for (let item of orderItems) {
      await prisma.bagItem.update({
        where: { id: item.bagItemId },
        data: {
          bag: { disconnect: true },
          order: { connect: { id: createdOrder.id } },
        },
      });
    }

    pubsub.publish(subscriptions.ORDER_ADDED, {
      createdOrder,
    });

    return createdOrder;
  }

  if (userId && userRole === "Seller")
    throw new ForbiddenError("This operation is forbidden for Admin");
}

export default { login, createOrFindBag, addItemToBag, createOrder };
