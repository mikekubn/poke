'use client';
import { HeartIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { H3, ParagraphBase, ParagraphLarge } from '@/components/Typography';
import {
  PokemonConnectionQuery,
  useMutationPokemonFavoriteMutation,
  useMutationPokemonUnFavoriteMutation,
} from '@/graphql/generated/schema';

interface IPokemonCard {
  pokemon: PokemonConnectionQuery['pokemons']['edges'][number];
}

const PokemonCard = ({ pokemon }: IPokemonCard): React.ReactElement => {
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
    <div className="w-[495px] h-[330px] rounded-3xl flex flex-col shadow-lg p-10 group bg-slate-200/60">
      <div className="inline-flex justify-between mb-4">
        <Link
          href={{
            pathname: `/pokemon/${pokemon?.name}`,
          }}
        >
          <H3 font="bold" className="group-hover:underline underline-offset-2">
            {pokemon?.name}
          </H3>
        </Link>
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
          <button onClick={handleClick}>
            <HeartIcon
              className={clsx('h-8 w-8', {
                'fill-red-600': isFavorite,
                'fill-white': !isFavorite,
              })}
            />
          </button>
        </div>
        <Link
          href={{
            pathname: `/pokemon/${pokemon?.name}`,
          }}
        >
          <div className="relative object-fill w-[180px] h-[200px]">
            <Image
              sizes="(max-width: 768px) 100vw, 33vw"
              fill
              priority
              src={pokemon?.image}
              alt={pokemon?.name}
              className="rounded-3xl"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
