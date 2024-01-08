'use client';

import { PlayCircleIcon, StopCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { HeartIconButton, PokemonImage } from '@/components/PokemonChildrenComponents';
import { H3, ParagraphLarge } from '@/components/Typography';
import { usePokemonLazyQuery } from '@/graphql/generated/schema';
import { useAudio } from '@/hooks/useAudio';

interface IPokemonView {
  name: string;
}

const PokemonView = ({ name }: IPokemonView): React.ReactElement => {
  const [getPokemonByName, { data, loading, error }] = usePokemonLazyQuery({ variables: { name } });
  const isLoading = !data || loading;
  const { isPlaying, toggleIsPlaying } = useAudio({ url: data?.pokemonByName?.sound });
  const evolitions = data?.pokemonByName?.evolutions;

  const basePokemonObject = {
    id: data?.pokemonByName?.id ?? '',
    name: data?.pokemonByName?.name ?? '',
    image: data?.pokemonByName?.image ?? '',
    types: data?.pokemonByName?.types ?? [],
    isFavorite: data?.pokemonByName?.isFavorite ?? false,
  };

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

  return (
    <section className="flex flex-col flex-1 mt-10">
      <div className="inline-flex gap-20 items-center bg-blue-200 p-10 rounded-3xl">
        <PokemonImage
          pokemon={basePokemonObject}
          classNameImage="rounded-3xl"
          className="w-[220px] h-[200px]"
        />
        <button onClick={toggleIsPlaying} className="w-36 h-28 flex flex-col items-center">
          <ParagraphLarge font="regular">Play my voice:</ParagraphLarge>
          {isPlaying ? (
            <StopCircleIcon className="w-28 h-28 text-blue-900" />
          ) : (
            <PlayCircleIcon className="w-28 h-28 text-blue-900" />
          )}
        </button>
        <HeartIconButton pokemon={basePokemonObject} />
      </div>
      {evolitions?.length ? (
        <div className="mt-10">
          <H3 font="bold">Evolutions:</H3>
          <div className="my-4 inline-flex gap-10 bg-blue-200 p-10 rounded-3xl">
            {evolitions?.map((evolution) => (
              <PokemonImage
                key={evolution.id}
                pokemon={{
                  id: evolution?.id,
                  name: evolution?.name,
                  image: evolution.image,
                  types: [],
                  isFavorite: false,
                }}
                classNameImage="rounded-3xl"
                className="w-[220px] h-[200px]"
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default PokemonView;
