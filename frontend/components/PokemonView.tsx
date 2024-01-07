'use client';

import React from 'react';

import { ParagraphLarge } from '@/components/Typography';
import { usePokemonLazyQuery } from '@/graphql/generated/schema';

interface IPokemonView {
  name: string;
}

const PokemonView = ({ name }: IPokemonView): React.ReactElement => {
  const [getPokemonByName, { data, loading, error }] = usePokemonLazyQuery({ variables: { name } });
  const isLoading = !data || loading;

  React.useEffect(() => {
    if (name) {
      getPokemonByName({ variables: { name } });
    }
  }, [getPokemonByName, name]);

  if (isLoading) {
    return <ParagraphLarge font="regular">Loading ...</ParagraphLarge>;
  }

  if (error) {
    return <ParagraphLarge font="regular">Error: {error.message}</ParagraphLarge>;
  }

  return <section></section>;
};

export default PokemonView;
