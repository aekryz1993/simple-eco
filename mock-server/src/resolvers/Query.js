function fashionNews(_, __, { prisma }) {
  return prisma.fashionNewsItem.findMany();
}

function products(_, __, { prisma }) {
  return prisma.product.findMany();
}

function product(_, { id }, { prisma }) {
  return prisma.product.findUnique({
    where: { id },
  });
}

export default {
  fashionNews,
  products,
  product,
};
