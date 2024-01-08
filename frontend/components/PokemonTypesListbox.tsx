'use client';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

import { PokemonTypesQuery } from '@/graphql/generated/schema';

import { ParagraphBase } from './Typography';

interface IPokemonTypesListbox {
  pokemonTypes?: PokemonTypesQuery['pokemonTypes'];
  pokemonType: string;
  isLoading: boolean;
  callback: (val: string) => void;
}

const PokemonTypesListbox = ({
  pokemonTypes,
  pokemonType,
  isLoading,
  callback,
}: IPokemonTypesListbox): React.ReactElement => {
  const [selected, setSelected] = React.useState(pokemonType);
  const hasSelectedItem = selected ? selected : 'Select type';

  React.useEffect(() => {
    if (selected) {
      callback(selected);
    }
  }, [callback, selected]);

  return (
    <div className="h-10 w-44">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-slate-50 hover:bg-slate-100 h-10 pl-3 pr-10 border border-blue-900">
            <ParagraphBase font="normal" className="block truncate">
              {hasSelectedItem}
            </ParagraphBase>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-blue-900" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute z-[50] mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-50 py-1 shadow-lg">
            {isLoading ? (
              <ParagraphBase font="normal">Loading...</ParagraphBase>
            ) : (
              <>
                {pokemonTypes?.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className="relative cursor-default select-none py-2 pl-10 pr-4"
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={clsx('block truncate', {
                            'absolute inset-y-0 left-0 flex items-center pl-3 text-sky-500':
                              selected,
                          })}
                        >
                          {selected && <CheckIcon className="h-5 w-5 mr-2" aria-hidden="true" />}
                          {item}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </>
            )}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default PokemonTypesListbox;
