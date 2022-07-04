function imagesList({ id }, _, { prisma }) {
  return prisma.product.findUnique({ where: { id } }).imagesList();
}

function mainImage({ id }, _, { prisma }) {
  return prisma.product.findUnique({ where: { id } }).mainImage();
}

function category({ id }, _, { prisma }) {
  return prisma.product.findUnique({ where: { id } }).category();
}

export default {
  mainImage,
  category,
  imagesList,
};
