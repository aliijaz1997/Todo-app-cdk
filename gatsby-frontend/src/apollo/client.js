import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://cwtm74gkpfhrbkr72c5z4a34me.appsync-api.us-east-2.amazonaws.com/graphql", // ENTER YOUR GRAPHQL ENDPOINT HERE
    fetch,
    headers: {
      "x-api-key": "da2-s44vd23bunc7tj5laxeocevmg4", // ENTER YOUR APPSYNC API KEY HERE
    },
  }),
  cache: new InMemoryCache(),
});