function orderList({ id }, _, { prisma }) {
  return prisma.order.findUnique({ where: { id } }).orderList();
}

export default {
  // orderList,
};
