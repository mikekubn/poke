'use-client';
import React from 'react';

import PokemonsView from '@/components/PokemonsView';
import { H2 } from '@/components/Typography';

const FavoritePokemons = (): React.ReactElement => {
  return (
    <section className="mt-10 flex flex-col items-center">
      <H2 font="bold">Favorite pokemons</H2>
      <PokemonsView isFavorite />
    </section>
  );
};

export default FavoritePokemons;
