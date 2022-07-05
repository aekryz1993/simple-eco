function img({ id }, _, { prisma }) {
  return prisma.fashionNewsItem.findUnique({ where: { id } }).img();
}

export default {
  img,
};
