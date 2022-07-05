function orderItems({ id }, _, { prisma }) {
  return prisma.order.findUnique({ where: { id } }).orderItems();
}

function user({ id }, _, { prisma }) {
  return prisma.order.findUnique({ where: { id } }).user();
}

function orderItem({ id }, _, { prisma }) {
  return prisma.order.findUnique({ where: { id } }).orderItem();
}

export default {
  orderItems,
  user,
  orderItem,
};
