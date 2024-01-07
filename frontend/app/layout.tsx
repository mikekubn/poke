import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import Header from '@/components/Header';

import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poke app',
  description: 'Find your pokemon',
  //TODO add other metadata
};

const RootLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return (
    <html lang="en">
      <Providers>
        <body className={clsx(inter.className, 'px-2 md:px-4 text-blue-900')}>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
