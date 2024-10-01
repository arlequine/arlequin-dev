// src/apollo/apolloClient.d.ts
declare module 'apollo/apolloClient.js' {
  import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
  const apolloClient: ApolloClient<NormalizedCacheObject>;
  export default apolloClient;
}