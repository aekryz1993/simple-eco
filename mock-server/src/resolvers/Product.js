function imagesList({ id }, _, { prisma }) {
  return prisma.product.findUnique({ where: { id } }).imagesList();
}

export default {
  imagesList,
};
