export const subscriptions = {
  ORDER_ADDED: "ORDER_ADDED",
};

function orderAddedSubscribe(context) {
  return context.pubsub.asyncIterator([subscriptions.ORDER_ADDED]);
}

const orderAdded = {
  subscribe: (_, __, context) =>
    context.userAuth &&
    context.userAuth.userRole === "Seller" &&
    orderAddedSubscribe(context),
};

export default { orderAdded };
