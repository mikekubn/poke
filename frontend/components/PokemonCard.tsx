'use client';
import { HeartIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { H3, ParagraphBase, ParagraphLarge } from '@/components/Typography';
import { PokemonsQueryInputQuery } from '@/graphql/generated/schema';

interface IPokemonCard {
  pokemon: PokemonsQueryInputQuery['pokemons']['edges'][number];
}

const PokemonCard = ({ pokemon }: IPokemonCard): React.ReactElement => {
  return (
    <div className="w-[495px] h-[330px] rounded-3xl flex flex-col shadow-lg p-10 group bg-slate-200/60">
      <div className="inline-flex justify-between mb-4">
        <Link href="">
          <H3 font="bold" className="group-hover:underline underline-offset-2">
            {pokemon.name}
          </H3>
        </Link>
        <ParagraphBase font="normal" className="text-black">
          #{pokemon.id}
        </ParagraphBase>
      </div>
      <div className="inline-flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <ParagraphLarge font="normal">Types:</ParagraphLarge>
            <ul className="mt-4">
              {pokemon.types.map((item, index) => (
                <li
                  key={index}
                  className="bg-white -600 my-2 rounded-2xl text-center p-0.5 w-[80px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <button>
            <HeartIcon className="h-8 w-8 fill-red-600" />
          </button>
        </div>
        <div className="relative object-fill w-[180px] h-[200px]">
          <Image fill src={pokemon.image} alt={pokemon.name} className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
