'use client';
import React from 'react';

import {
  HeartIconButton,
  IPokemon,
  PokemonHeader,
  PokemonImage,
} from '@/components/PokemonChildrenComponents';
import { ParagraphBase, ParagraphLarge } from '@/components/Typography';

const PokemonCard = ({ pokemon }: IPokemon): React.ReactElement => (
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
              <li key={index} className="bg-white -600 my-2 rounded-2xl text-center p-0.5 w-[80px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <HeartIconButton pokemon={pokemon} />
      </div>
      <PokemonImage
        pokemon={pokemon}
        classNameImage="rounded-3xl"
        className="w-[180px] h-[200px]"
      />
    </div>
  </div>
);

export default PokemonCard;
