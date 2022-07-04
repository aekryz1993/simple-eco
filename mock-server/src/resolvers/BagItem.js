function product({ id }, _, { prisma }) {
  return prisma.bagItem.findUnique({ where: { id } }).product();
}

export default {
  product,
};
