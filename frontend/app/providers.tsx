'use client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql',
  //TODO: fix memory cache for pokemons. Memory cache return data without affect to app.
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          PokemonConnection: {
            // merge: (existing, incoming): void => {
            //   console.log('merge existing', existing);
            //   console.log('merge incoming', incoming?.edges);
            //   return [...existing, ...incoming];
            // },
          },
        },
      },
    },
  }),
});

const Providers = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
