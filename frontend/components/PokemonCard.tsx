'use client';
import React from 'react';

import {
  HeartIconButton,
  IPokemon,
  PokemonHeader,
  PokemonImage,
} from '@/components/PokemonChildrenComponents';
import { ParagraphBase, ParagraphLarge } from '@/components/Typography';
import {
  useMutationPokemonFavoriteMutation,
  useMutationPokemonUnFavoriteMutation,
} from '@/graphql/generated/schema';

const PokemonCard = ({ pokemon }: IPokemon): React.ReactElement => {
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
    <div className="rounded-3xl flex flex-col shadow-lg p-10 group bg-slate-200/60 w-[495px] h-[330px]">
      <div className="inline-flex justify-between mb-4">
        <PokemonHeader pokemon={pokemon} />
        <ParagraphBase font="normal" className="text-black">
          #{pokemon?.id}
        </ParagraphBase>
      </div>
      <div className="inline-flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <ParagraphLarge font="normal">Types:</ParagraphLarge>
            <ul className="mt-4">
              {pokemon?.types?.map((item, index) => (
                <li
                  key={index}
                  className="bg-white -600 my-2 rounded-2xl text-center p-0.5 w-[80px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <HeartIconButton isFavorite={isFavorite} onClick={handleClick} />
        </div>
        <PokemonImage
          pokemon={pokemon}
          classNameImage="rounded-3xl"
          className="w-[180px] h-[200px]"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
