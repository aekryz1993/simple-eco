import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();
const subscriptions = {
  ORDER_ADDED: "ORDER_ADDED",
};

export const resolvers = {
  Query: {
    fashionNews: async (_, __, { prisma }) =>
      await prisma.fashionNewsItem.findMany(),
    products: async (_, __, { prisma }) => await prisma.product.findMany(),
    product: async (_, { id }, { prisma }) =>
      await prisma.product.findUnique({
        where: { id },
      }),
  },

  Mutation: {
    addOrder: async (_, { consumer, phone, orderList }, { prisma }) => {
      // const newOrderList = await prisma.orderListItem.create({
      //   data: orderList,
      // });
      const orderAdded = await prisma.order.create({
        data: {
          consumer,
          phone,
          orderList: {
            createMany: {
              data: orderList,
            },
          },
        },
        include: {
          orderList: true,
        },
      });

      pubsub.publish(subscriptions.ORDER_ADDED, {
        orderAdded,
      });
      return orderAdded;
    },
  },

  Subscription: {
    orderAdded: {
      subscribe: () => pubsub.asyncIterator([subscriptions.ORDER_ADDED]),
    },
  },

  OrderListItem: {
    productId: (parent) => parent.productId,
    quantity: (parent) => parent.quantity,
    size: (parent) => parent.size,
  },
};
