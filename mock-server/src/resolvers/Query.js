import {
  AuthenticationError,
  ForbiddenError,
  UserInputError,
} from "apollo-server-core";

function fashionNews(_, __, { prisma }) {
  return prisma.fashionNewsItem.findMany();
}

function products(_, { filter, search }, { prisma }) {
  if (!filter && !search) return prisma.product.findMany();

  if (search)
    return prisma.product.findMany({
      where: {
        OR: [
          { name: { search } },
          { description: { search } },
          { fullDescription: { search } },
        ],
      },
    });

  const orderBy = filter.price
    ? { price: filter.price }
    : filter.date
    ? { createdAt: filter.date }
    : { createdAt: "desc" };
  return prisma.product.findMany({
    take: filter.take,
    where: {
      AND: [{ gender: filter.gender }, { category: { name: filter.category } }],
    },
    orderBy,
  });
}

function orders(_, __, { prisma, userId, userRole }) {
  if (!userId) throw new AuthenticationError("User doesn't autheticated");
  if (userRole !== "Seller")
    throw new ForbiddenError("This operation is forbidden for Consumer");
  return prisma.order.findMany();
}

async function product(_, { id }, { prisma }) {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) throw new UserInputError("Product doesn't exist.");
  return product;
}

async function bag(_, { anonymousId }, { prisma, userId }) {
  const bag = anonymousId
    ? await prisma.bag.findUnique({
        where: { anonymousId },
      })
    : userId
    ? await prisma.bag.findUnique({
        where: { userId },
      })
    : null;
  if (!bag) throw new UserInputError("Bag doesn't exist.");
  return bag;
}

export default {
  fashionNews,
  products,
  product,
  bag,
  orders,
};
