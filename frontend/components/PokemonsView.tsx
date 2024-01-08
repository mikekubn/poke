'use client';
import React from 'react';

import PokemonCard from '@/components/PokemonCard';
import PokemonList from '@/components/PokemonList';
import { usePokemonConnectionQuery } from '@/graphql/generated/schema';

import { ParagraphBase, ParagraphLarge } from './Typography';

const PokemonsView = ({ isFavorite }: { isFavorite?: boolean }): React.ReactElement => {
  const filterValueFavorite = isFavorite ? isFavorite : null;
  const [isGrid, setIsGrid] = React.useState(true);
  const toggleGrid = (): void => setIsGrid((val) => !val);
  const { data, loading, error } = usePokemonConnectionQuery({
    fetchPolicy: 'no-cache', //Hotfix: reloade cache, if somehting change withou reloade
    variables: { limit: 10, offset: 0, filter: { isFavorite: filterValueFavorite } },
  });
  const isLoading = !data || loading;

  if (isLoading) {
    return <ParagraphLarge font="regular">Loading ...</ParagraphLarge>;
  }

  if (error) {
    return <ParagraphLarge font="regular">Error: {error.message}</ParagraphLarge>;
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="inline-flex gap-2">
        <button
          className="border border-blue-900 rounded-md px-4 hover:underline bg-slate-100 shadow-md"
          onClick={toggleGrid}
        >
          <ParagraphBase font="regular">{isGrid ? 'Grid' : 'List'}</ParagraphBase>
        </button>
      </div>
      <section className="flex flex-1 flex-wrap justify-center gap-6 my-10">
        {data?.pokemons.edges?.map((pokemon) => {
          if (isGrid) {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          } else {
            return <PokemonList key={pokemon.id} pokemon={pokemon} />;
          }
        })}
      </section>
    </div>
  );
};

export default PokemonsView;
