import { UserInputError } from "apollo-server-core";

function fashionNews(_, __, { prisma }) {
  return prisma.fashionNewsItem.findMany();
}

function products(_, __, { prisma }) {
  return prisma.product.findMany();
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
};
