'use client';
import React from 'react';

import {
  HeartIconButton,
  IPokemon,
  PokemonHeader,
  PokemonImage,
} from '@/components/PokemonChildrenComponents';

const PokemonList = ({ pokemon }: IPokemon): React.ReactElement => (
  <div className="rounded-xl p-4 group bg-slate-200/80 h-24 w-[600px] inline-flex items-center justify-between">
    <div className="inline-flex gap-4">
      <PokemonHeader pokemon={pokemon} />
      <HeartIconButton pokemon={pokemon} />
    </div>
    <PokemonImage pokemon={pokemon} className="w-[120px] h-20" classNameImage="rounded-xl" />
  </div>
);

export default PokemonList;
