import { readJsonFile } from "./database";

const mocks = async () => {
  const fashionNews = await readJsonFile("fashionNews.json");
  const products = await readJsonFile("products.json");
  return {
    Query: {
      fashionNews: () => fashionNews,
      products: () => products,
    },
  };
};

export default mocks;
