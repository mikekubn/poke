import { redirect } from 'next/navigation';
import React from 'react';
const Pokemon = (): React.ReactElement => {
  redirect('/');
  return <></>;
};

export default Pokemon;
