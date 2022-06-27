import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";
import { ApolloProvider } from "@apollo/client";
import client from "apollo-client";

if (typeof window === "object" && process.env.NODE_ENV === "development") {
  const { worker } = require("__mocks__/browser");
  worker.start();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
