// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_SPACE_ID}`,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
});

export default client;