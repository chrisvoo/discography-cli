import React from 'react';
import SelectInput from 'ink-select-input';
import { Item } from 'ink-select-input/build/SelectInput';

type handleSelect = (item: Item<string>) => void;

export const ChooseAction = ({ handleSelect }: handleSelect) => {
  const items: Item<string>[] = [
    {
      label: "Search band's discography",
      value: 'discography',
    },
    {
      label: "Search album's songs",
      value: 'album',
    },
  ];

  return <SelectInput items={items} onSelect={handleSelect} />;
};
