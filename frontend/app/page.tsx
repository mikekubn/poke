import React from 'react';

import PokemonsView from '@/components/PokemonsView';

const Home = (): React.ReactElement => {
  return (
    <main className="flex flex-col text-blue-900">
      <PokemonsView />
    </main>
  );
};

export default Home;
