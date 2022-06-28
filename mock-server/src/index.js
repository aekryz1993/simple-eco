import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import express from "express";
import {
  ApolloServerPluginDrainHttpServer,
  AuthenticationError,
} from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

import typeDefs from "./schema";
import mocks from "./mocks";
import { resolvers } from "./resolvers";
import { createFashionNewsItems } from "./data/fashionNews";
import { createProductItems } from "./data/products";
import { createJSONOrderFile } from "./data/order";
import { createJSONUsersFile, login } from "./data/user";

async function initiateData() {
  await createFashionNewsItems();
  await createProductItems();
  await createJSONOrderFile();
  await createJSONUsersFile();
}

async function startServer() {
  try {
    await initiateData();

    const app = express();
    const httpServer = createServer(app);

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers: await resolvers(),
    });

    const wsServer = new WebSocketServer({
      server: httpServer,
      path: "/graphql",
    });

    const serverCleanup = useServer({ schema }, wsServer);

    const server = new ApolloServer({
      schema,
      csrfPrevention: true,
      cache: "bounded",
      mocks: await mocks(),
      mockEntireSchema: false,
      context: async ({ req }) => {
        const token = req.headers.authorization || "";
        const userId = token.split(" ")[1];
        if (userId) {
          const user = await login(userId).catch((error) => {
            throw new AuthenticationError(error.message);
          });
          return { userId: user.id, userRole: user.role };
        }
      },
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              },
            };
          },
        },
      ],
    });

    await server.start();
    server.applyMiddleware({
      app,
      path: "/graphql",
    });

    await new Promise((resolve) =>
      httpServer.listen({ port: process.env.PORT || 4001 }, resolve)
    );
    console.log(
      `🚀 Server ready at http://localhost:4001${server.graphqlPath}`
    );
  } catch (error) {
    console.log(error);
  }
}

startServer();
