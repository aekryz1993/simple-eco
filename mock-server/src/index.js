import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import mocks from "./mocks";
import data from "./data";
import { resolvers } from "./resolvers";

async function startServer() {
  const fashionNewsItems = await data.getFashionNewsItems();
  const productItems = await data.getProductItems();
  const productItem = data.getProductItem(productItems);

  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers({ productItem }),
    mocks: mocks({ fashionNewsItems, productItems }),
    mockEntireSchema: false,
  });

  server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
  });
}

startServer();
