import jwt from "jsonwebtoken";
import { APP_SECRET } from "../utils";
import { subscriptions } from "./Subscription";

async function addOrder(_, { consumer, phone, orderList }, { prisma, pubsub }) {
  const orderAdded = await prisma.order.create({
    data: {
      consumer,
      phone,
      orderList: {
        createMany: {
          data: orderList,
        },
      },
    },
    include: {
      orderList: true,
    },
  });

  // if (userId) {
  pubsub.publish(subscriptions.ORDER_ADDED, {
    orderAdded,
  });
  // }

  return orderAdded;
}

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

export default { addOrder, login };
