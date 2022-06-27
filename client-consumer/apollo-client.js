import { ApolloClient, InMemoryCache } from "@apollo/client";

const LOCAL_HOST = "http://localhost:4000";

const client = new ApolloClient({
  uri: LOCAL_HOST,
  cache: new InMemoryCache(),
});

export default client;
