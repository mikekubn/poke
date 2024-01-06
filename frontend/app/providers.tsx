'use client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
