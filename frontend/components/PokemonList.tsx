'use client';
import React from 'react';

import {
  HeartIconButton,
  IPokemon,
  PokemonHeader,
  PokemonImage,
} from '@/components/PokemonChildrenComponents';
import {
  useMutationPokemonFavoriteMutation,
  useMutationPokemonUnFavoriteMutation,
} from '@/graphql/generated/schema';

const PokemonList = ({ pokemon }: IPokemon): React.ReactElement => {
  //TODO add response from un/favorite mutation
  const [sendFavoritePokemon] = useMutationPokemonFavoriteMutation({
    refetchQueries: ['PokemonConnection'],
  });
  const [sendUnfavoritePokemon] = useMutationPokemonUnFavoriteMutation({
    refetchQueries: ['PokemonConnection'],
  });
  const isFavorite = pokemon?.isFavorite;

  const handleClick = (): void => {
    if (!isFavorite) {
      sendFavoritePokemon({ variables: { id: pokemon.id } });
    } else {
      sendUnfavoritePokemon({ variables: { id: pokemon.id } });
    }
  };

  return (
    <div className="rounded-xl p-4 group bg-slate-200/80 h-24 w-[600px] inline-flex items-center justify-between">
      <div className="inline-flex gap-4">
        <PokemonHeader pokemon={pokemon} />
        <HeartIconButton isFavorite={isFavorite} onClick={handleClick} />
      </div>
      <PokemonImage pokemon={pokemon} className="w-[120px] h-20" classNameImage="rounded-xl" />
    </div>
  );
};

export default PokemonList;
