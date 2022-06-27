import { getProductItem } from "./data/products";
import { PubSub } from "graphql-subscriptions";
import { createOrder } from "./data/order";

const pubsub = new PubSub();
const subscriptions = {
  ORDER_ADDED: "ORDER_ADDED",
};

export const resolvers = async () => ({
  Query: {
    product: async (_, { id }) => {
      const product = await getProductItem(id);
      return product;
    },
  },

  Mutation: {
    addOrder: async (_, { consumer, phone, orderList }) => {
      const orderAdded = await createOrder({
        consumer,
        phone,
        orderList,
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
});
