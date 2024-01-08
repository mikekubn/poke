'use client';
import React from 'react';

import PokemonCard from '@/components/PokemonCard';
import PokemonList from '@/components/PokemonList';
import PokemonTypesListbox from '@/components/PokemonTypesListbox';
import { ParagraphBase, ParagraphLarge } from '@/components/Typography';
import { usePokemonConnectionQuery, usePokemonTypesQuery } from '@/graphql/generated/schema';

const PokemonsView = ({ isFavorite }: { isFavorite?: boolean }): React.ReactElement => {
  const filterValueFavorite = isFavorite ? isFavorite : null;
  const [pokemonType, setPokemonType] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isGrid, setIsGrid] = React.useState(true);
  const toggleGrid = (): void => setIsGrid((val) => !val);
  const { data: pokemonTypesData, loading: isLoadingPokemonTypes } = usePokemonTypesQuery();
  const { data, loading, error } = usePokemonConnectionQuery({
    fetchPolicy: 'no-cache', //Hotfix: reloade cache, if somehting change withou reloade
    variables: {
      limit: 10,
      offset: 0,
      search: searchQuery,
      filter: { isFavorite: filterValueFavorite, type: pokemonType },
    },
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
      <div className="inline-flex gap-2 items-center">
        <button
          className="border border-blue-900 rounded-lg h-10 px-4 hover:underline bg-slate-100 shadow-md"
          onClick={toggleGrid}
        >
          <ParagraphBase font="regular">{isGrid ? 'List' : 'Grid'}</ParagraphBase>
        </button>
        <PokemonTypesListbox
          callback={(val): void => setPokemonType(val)}
          pokemonType={pokemonType}
          pokemonTypes={pokemonTypesData?.pokemonTypes}
          isLoading={isLoadingPokemonTypes}
        />
        <input
          type="text"
          name="searchQuery"
          className="h-10 w-48 border border-blue-900 rounded-lg p-2 bg-slate-50 hover:bg-slate-100"
          placeholder="Find your pokemon..."
          value={searchQuery}
          onChange={(e) => {
            e.preventDefault();
            setSearchQuery(e.target.value);
          }}
        />
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
