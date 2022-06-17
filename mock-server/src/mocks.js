const mocks = ({ fashionNewsItems, productItems }) => {
  return {
    Query: {
      fashionNews: () => fashionNewsItems,
      products: () => productItems,
    },
  };
};

export default mocks;
