export const subscriptions = {
  CREATED_ORDER: "CREATED_ORDER",
};

function orderAddedSubscribe(context) {
  return context.pubsub.asyncIterator([subscriptions.CREATED_ORDER]);
}

const createdOrder = {
  subscribe: (_, __, context) => {
    if (context.userAuth && context.userAuth.userRole === "Seller")
      return orderAddedSubscribe(context);

    throw new ForbiddenError("This operation is forbidden for Consumer");
  },
};

export default { createdOrder };
