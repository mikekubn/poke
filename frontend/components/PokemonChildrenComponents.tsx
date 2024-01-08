'use client';
import { HeartIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { H3, ParagraphBase } from '@/components/Typography';
import { PokemonConnectionQuery } from '@/graphql/generated/schema';

export interface IPokemon {
  pokemon: PokemonConnectionQuery['pokemons']['edges'][number];
}

export const PokemonImage = ({
  pokemon,
  className,
  classNameImage,
}: { classNameImage: string; className: string } & IPokemon): React.ReactElement => (
  <Link
    href={{
      pathname: `/pokemon/${pokemon?.name}`,
    }}
  >
    <div className={clsx(className, 'group [perespective:400px]')}>
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <Image
            sizes="(max-width: 200px) 100vw, 33vw"
            fill
            priority
            src={pokemon?.image}
            alt={pokemon?.name}
            className={classNameImage}
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/60 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <ParagraphBase font="normal" className="text-yellow-400">
              {pokemon.name}
            </ParagraphBase>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export const PokemonHeader = ({ pokemon }: IPokemon): React.ReactElement => (
  <Link
    href={{
      pathname: `/pokemon/${pokemon?.name}`,
    }}
  >
    <H3 font="bold" className="group-hover:underline underline-offset-2">
      {pokemon?.name}
    </H3>
  </Link>
);

export const HeartIconButton = ({
  isFavorite,
  onClick,
}: {
  isFavorite: boolean;
  onClick: () => void;
}): React.ReactElement => (
  <button onClick={onClick}>
    <HeartIcon
      className={clsx('h-8 w-8', {
        'fill-red-600': isFavorite,
        'fill-white': !isFavorite,
      })}
    />
  </button>
);
