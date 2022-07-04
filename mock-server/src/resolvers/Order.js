function orderItems({ id }, _, { prisma }) {
  return prisma.order.findUnique({ where: { id } }).orderItems();
}

function user({ id }, _, { prisma, userId, userRole }) {
  if ((userId, userRole === "Consumer")) {
    return prisma.order.findUnique({ where: { id } }).user();
  }
  return null;
}

export default {
  orderItems,
  user,
};
