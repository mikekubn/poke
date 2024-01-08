import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Upload: { input: any; output: any };
};

export type Attack = {
  __typename?: 'Attack';
  damage: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Mutation = {
  __typename?: 'Mutation';
  favoritePokemon?: Maybe<Pokemon>;
  unFavoritePokemon?: Maybe<Pokemon>;
};

export type MutationFavoritePokemonArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUnFavoritePokemonArgs = {
  id: Scalars['ID']['input'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  attacks: PokemonAttack;
  classification: Scalars['String']['output'];
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  evolutions: Array<Pokemon>;
  fleeRate: Scalars['Float']['output'];
  height: PokemonDimension;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  isFavorite: Scalars['Boolean']['output'];
  maxCP: Scalars['Int']['output'];
  maxHP: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  resistant: Array<Scalars['String']['output']>;
  sound: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
  weaknesses: Array<Scalars['String']['output']>;
  weight: PokemonDimension;
};

export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  fast: Array<Attack>;
  special: Array<Attack>;
};

export type PokemonConnection = {
  __typename?: 'PokemonConnection';
  count: Scalars['Int']['output'];
  edges: Array<Pokemon>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
};

export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  maximum: Scalars['String']['output'];
  minimum: Scalars['String']['output'];
};

export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  amount: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type PokemonFilterInput = {
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PokemonsQueryInput = {
  filter?: InputMaybe<PokemonFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  pokemonById?: Maybe<Pokemon>;
  pokemonByName?: Maybe<Pokemon>;
  pokemonTypes: Array<Scalars['String']['output']>;
  pokemons: PokemonConnection;
};

export type QueryPokemonByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPokemonByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryPokemonsArgs = {
  query: PokemonsQueryInput;
};

export type Root = {
  __typename?: 'Root';
  query: Query;
};

export type PokemonQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type PokemonQuery = {
  __typename?: 'Query';
  pokemonByName?: {
    __typename?: 'Pokemon';
    sound: string;
    weaknesses: Array<string>;
    id: string;
    name: string;
    image: string;
    types: Array<string>;
    isFavorite: boolean;
    attacks: {
      __typename?: 'PokemonAttack';
      fast: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>;
      special: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>;
    };
    weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string };
    height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string };
    evolutions: Array<{ __typename?: 'Pokemon'; id: string; name: string; image: string }>;
  } | null;
};

export type PokemonTypesQueryVariables = Exact<{ [key: string]: never }>;

export type PokemonTypesQuery = { __typename?: 'Query'; pokemonTypes: Array<string> };

export type PokemonConnectionQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PokemonFilterInput>;
}>;

export type PokemonConnectionQuery = {
  __typename?: 'Query';
  pokemons: {
    __typename?: 'PokemonConnection';
    edges: Array<{
      __typename?: 'Pokemon';
      id: string;
      name: string;
      image: string;
      types: Array<string>;
      isFavorite: boolean;
    }>;
  };
};

export type MutationPokemonUnFavoriteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type MutationPokemonUnFavoriteMutation = {
  __typename?: 'Mutation';
  unFavoritePokemon?: { __typename?: 'Pokemon'; id: string } | null;
};

export type MutationPokemonFavoriteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type MutationPokemonFavoriteMutation = {
  __typename?: 'Mutation';
  favoritePokemon?: { __typename?: 'Pokemon'; id: string } | null;
};

export type PokemonAtributesFragment = {
  __typename?: 'Pokemon';
  id: string;
  name: string;
  image: string;
  types: Array<string>;
  isFavorite: boolean;
};

export type PokemonExtendAtributesFragment = {
  __typename?: 'Pokemon';
  sound: string;
  weaknesses: Array<string>;
  id: string;
  name: string;
  image: string;
  types: Array<string>;
  isFavorite: boolean;
  attacks: {
    __typename?: 'PokemonAttack';
    fast: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>;
    special: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>;
  };
  weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string };
  height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string };
  evolutions: Array<{ __typename?: 'Pokemon'; id: string; name: string; image: string }>;
};

export const PokemonAtributesFragmentDoc = gql`
  fragment pokemonAtributes on Pokemon {
    id
    name
    image
    types
    isFavorite
  }
`;
export const PokemonExtendAtributesFragmentDoc = gql`
  fragment pokemonExtendAtributes on Pokemon {
    ...pokemonAtributes
    sound
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    weaknesses
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    evolutions {
      id
      name
      image
    }
  }
  ${PokemonAtributesFragmentDoc}
`;
export const PokemonDocument = gql`
  query Pokemon($name: String!) {
    pokemonByName(name: $name) {
      ...pokemonExtendAtributes
    }
  }
  ${PokemonExtendAtributesFragmentDoc}
`;

/**
 * __usePokemonQuery__
 *
 * To run a query within a React component, call `usePokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePokemonQuery(
  baseOptions: Apollo.QueryHookOptions<PokemonQuery, PokemonQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
}
export function usePokemonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PokemonQuery, PokemonQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
}
export function usePokemonSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<PokemonQuery, PokemonQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
}
export type PokemonQueryHookResult = ReturnType<typeof usePokemonQuery>;
export type PokemonLazyQueryHookResult = ReturnType<typeof usePokemonLazyQuery>;
export type PokemonSuspenseQueryHookResult = ReturnType<typeof usePokemonSuspenseQuery>;
export type PokemonQueryResult = Apollo.QueryResult<PokemonQuery, PokemonQueryVariables>;
export const PokemonTypesDocument = gql`
  query PokemonTypes {
    pokemonTypes
  }
`;

/**
 * __usePokemonTypesQuery__
 *
 * To run a query within a React component, call `usePokemonTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePokemonTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<PokemonTypesQuery, PokemonTypesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PokemonTypesQuery, PokemonTypesQueryVariables>(
    PokemonTypesDocument,
    options
  );
}
export function usePokemonTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PokemonTypesQuery, PokemonTypesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PokemonTypesQuery, PokemonTypesQueryVariables>(
    PokemonTypesDocument,
    options
  );
}
export function usePokemonTypesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<PokemonTypesQuery, PokemonTypesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PokemonTypesQuery, PokemonTypesQueryVariables>(
    PokemonTypesDocument,
    options
  );
}
export type PokemonTypesQueryHookResult = ReturnType<typeof usePokemonTypesQuery>;
export type PokemonTypesLazyQueryHookResult = ReturnType<typeof usePokemonTypesLazyQuery>;
export type PokemonTypesSuspenseQueryHookResult = ReturnType<typeof usePokemonTypesSuspenseQuery>;
export type PokemonTypesQueryResult = Apollo.QueryResult<
  PokemonTypesQuery,
  PokemonTypesQueryVariables
>;
export const PokemonConnectionDocument = gql`
  query PokemonConnection($limit: Int, $offset: Int, $search: String, $filter: PokemonFilterInput) {
    pokemons(query: { limit: $limit, offset: $offset, search: $search, filter: $filter }) {
      edges {
        ...pokemonAtributes
      }
    }
  }
  ${PokemonAtributesFragmentDoc}
`;

/**
 * __usePokemonConnectionQuery__
 *
 * To run a query within a React component, call `usePokemonConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonConnectionQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      search: // value for 'search'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function usePokemonConnectionQuery(
  baseOptions?: Apollo.QueryHookOptions<PokemonConnectionQuery, PokemonConnectionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PokemonConnectionQuery, PokemonConnectionQueryVariables>(
    PokemonConnectionDocument,
    options
  );
}
export function usePokemonConnectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PokemonConnectionQuery, PokemonConnectionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PokemonConnectionQuery, PokemonConnectionQueryVariables>(
    PokemonConnectionDocument,
    options
  );
}
export function usePokemonConnectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PokemonConnectionQuery,
    PokemonConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PokemonConnectionQuery, PokemonConnectionQueryVariables>(
    PokemonConnectionDocument,
    options
  );
}
export type PokemonConnectionQueryHookResult = ReturnType<typeof usePokemonConnectionQuery>;
export type PokemonConnectionLazyQueryHookResult = ReturnType<typeof usePokemonConnectionLazyQuery>;
export type PokemonConnectionSuspenseQueryHookResult = ReturnType<
  typeof usePokemonConnectionSuspenseQuery
>;
export type PokemonConnectionQueryResult = Apollo.QueryResult<
  PokemonConnectionQuery,
  PokemonConnectionQueryVariables
>;
export const MutationPokemonUnFavoriteDocument = gql`
  mutation MutationPokemonUnFavorite($id: ID!) {
    unFavoritePokemon(id: $id) {
      id
    }
  }
`;
export type MutationPokemonUnFavoriteMutationFn = Apollo.MutationFunction<
  MutationPokemonUnFavoriteMutation,
  MutationPokemonUnFavoriteMutationVariables
>;

/**
 * __useMutationPokemonUnFavoriteMutation__
 *
 * To run a mutation, you first call `useMutationPokemonUnFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationPokemonUnFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationPokemonUnFavoriteMutation, { data, loading, error }] = useMutationPokemonUnFavoriteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMutationPokemonUnFavoriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationPokemonUnFavoriteMutation,
    MutationPokemonUnFavoriteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MutationPokemonUnFavoriteMutation,
    MutationPokemonUnFavoriteMutationVariables
  >(MutationPokemonUnFavoriteDocument, options);
}
export type MutationPokemonUnFavoriteMutationHookResult = ReturnType<
  typeof useMutationPokemonUnFavoriteMutation
>;
export type MutationPokemonUnFavoriteMutationResult =
  Apollo.MutationResult<MutationPokemonUnFavoriteMutation>;
export type MutationPokemonUnFavoriteMutationOptions = Apollo.BaseMutationOptions<
  MutationPokemonUnFavoriteMutation,
  MutationPokemonUnFavoriteMutationVariables
>;
export const MutationPokemonFavoriteDocument = gql`
  mutation MutationPokemonFavorite($id: ID!) {
    favoritePokemon(id: $id) {
      id
    }
  }
`;
export type MutationPokemonFavoriteMutationFn = Apollo.MutationFunction<
  MutationPokemonFavoriteMutation,
  MutationPokemonFavoriteMutationVariables
>;

/**
 * __useMutationPokemonFavoriteMutation__
 *
 * To run a mutation, you first call `useMutationPokemonFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationPokemonFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationPokemonFavoriteMutation, { data, loading, error }] = useMutationPokemonFavoriteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMutationPokemonFavoriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationPokemonFavoriteMutation,
    MutationPokemonFavoriteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MutationPokemonFavoriteMutation,
    MutationPokemonFavoriteMutationVariables
  >(MutationPokemonFavoriteDocument, options);
}
export type MutationPokemonFavoriteMutationHookResult = ReturnType<
  typeof useMutationPokemonFavoriteMutation
>;
export type MutationPokemonFavoriteMutationResult =
  Apollo.MutationResult<MutationPokemonFavoriteMutation>;
export type MutationPokemonFavoriteMutationOptions = Apollo.BaseMutationOptions<
  MutationPokemonFavoriteMutation,
  MutationPokemonFavoriteMutationVariables
>;
