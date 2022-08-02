import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import { ENV } from "@config/Env";
import { ApolloClient, ApolloProvider as Aprovider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error' 
import { useAppInitialState } from "@hooks/useAppInitialState";
import { Context } from "@/Context";

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token") !== null ? JSON.parse(window.sessionStorage.getItem("token")).token : null;
    return {
      headers: {
        ...headers,
        authorization: token ? `bearer ${token}` : "",
      },
    };
  }
);

const httpLink = createHttpLink({
  uri: `${ENV.API_URL}graphql`,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem("token");
      window.location = '/user'
    }
  })
});

ReactDOM.createRoot(document.getElementById("app")).render(
  <Context.Provider value={useAppInitialState()}>
    <Aprovider client={client}>
      <App />
    </Aprovider>
  </Context.Provider>
);
