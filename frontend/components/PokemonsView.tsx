'use client';
import React from 'react';

import PokemonCard from '@/components/PokemonCard';
import { usePokemonConnectionQuery } from '@/graphql/generated/schema';

import { ParagraphLarge } from './Typography';

const PokemonsView = (): React.ReactElement => {
  const { data, loading, error } = usePokemonConnectionQuery({
    variables: { limit: 10, offset: 0 },
  });
  const isLoading = !data || loading;

  if (isLoading) {
    return <ParagraphLarge font="regular">Loading ...</ParagraphLarge>;
  }

  if (error) {
    return <ParagraphLarge font="regular">Error: {error.message}</ParagraphLarge>;
  }

  return (
    <section className="flex flex-1 flex-wrap justify-center gap-6 my-10">
      {data?.pokemons.edges?.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </section>
  );
};

export default PokemonsView;
