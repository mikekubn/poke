import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Navigation from '@/components/Navigation';
import { H1 } from '@/components/Typography';

const Header = (): React.ReactElement => {
  return (
    <header className="z-10 flex flex-row items-center justify-between px-4 md:px-6 sticky top-0 bg-slate-200/60 py-3 border-b border-slate-200">
      <Link href="/">
        <Image
          src="/pokemons/pokemon_icon.png"
          alt="pokemon-icon"
          height={42}
          width={42}
          className="hover:animate-poke-rotate"
        />
      </Link>
      <H1 font="semibold">Find your Pokemon</H1>
      <Navigation />
    </header>
  );
};

export default Header;
