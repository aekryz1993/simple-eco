function bagItems({ id }, _, { prisma }) {
  return prisma.bag.findUnique({ where: { id } }).bagItems();
}

export default {
  bagItems,
};
