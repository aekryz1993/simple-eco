export const resolvers = ({ productItem }) => ({
  Query: {
    product: (_, { id }) => {
      return productItem(id);
    },
  },
});
