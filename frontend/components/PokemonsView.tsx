'use client';
import React from 'react';

import PokemonCard from '@/components/PokemonCard';
import { usePokemonsQueryInputQuery } from '@/graphql/generated/schema';

const PokemonsView = (): React.ReactElement => {
  const { data, loading, error } = usePokemonsQueryInputQuery({
    variables: { limit: 10, offset: 0 },
  });
  const isLoading = !data || loading;

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <></>;
  }

  return (
    <section className="flex flex-1 flex-wrap justify-center gap-6 my-10">
      {data?.pokemons.edges.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </section>
  );
};

export default PokemonsView;
