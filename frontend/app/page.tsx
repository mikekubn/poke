'use client';
import React from 'react';

import { usePokemonsQueryInputQuery } from '@/graphql/generated/schema';

const Home = (): React.ReactElement => {
  const { data, loading, error } = usePokemonsQueryInputQuery({
    variables: { limit: 10, offset: 0 },
  });

  console.log('loading', loading);
  console.log('data', data);
  console.log('error', error);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">HomePage</main>
  );
};

export default Home;
