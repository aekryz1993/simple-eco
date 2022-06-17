import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import mocks from "./mocks";
import data from "./data";

async function startServer() {
  const fashionNewsItems = await data.getFashionNewsItems();
  const productItems = await data.getProductItems();

  const server = new ApolloServer({
    typeDefs,
    mocks: mocks({ fashionNewsItems, productItems }),
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
