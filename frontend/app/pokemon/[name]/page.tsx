import React from 'react';

import PokemonView from '@/components/PokemonView';
import { H1 } from '@/components/Typography';

type PageParams = {
  params: {
    name: string;
  };
};

const PokemonName = ({ params: { name } }: PageParams): React.ReactElement => (
  <div className="flex flex-col items-center mt-10">
    <H1 font="semibold">
      Selected pokemon: <span className="underline text-blue-500">{name}</span>
    </H1>
    <PokemonView name={name} />
  </div>
);

export default PokemonName;
