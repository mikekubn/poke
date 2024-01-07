import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Navigation from '@/components/Navigation';
import { H1 } from '@/components/Typography';

const Header = (): React.ReactElement => {
  return (
    <header className="flex flex-row items-center justify-between">
      <Link href="/">
        <Image src="/pokemons/pokemon_icon.png" alt="pokemon-icon" height={42} width={42} />
      </Link>
      <H1 font="semibold">Find your Pokemon</H1>
      <Navigation />
    </header>
  );
};

export default Header;
