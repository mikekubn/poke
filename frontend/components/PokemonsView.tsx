'use client';
import React from 'react';

import { usePokemonsQueryInputQuery } from '@/graphql/generated/schema';

const PokemonsView = (): React.ReactElement => {
  const { data, loading, error } = usePokemonsQueryInputQuery({
    variables: { limit: 10, offset: 0 },
  });

  console.log('loading', loading);
  console.log('data', data);
  console.log('error', error);

  return <></>;
};

export default PokemonsView;
