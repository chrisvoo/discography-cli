import { useState } from 'react';
import { ChooseAction } from './ChooseAction';
import Discography from './actions/Discography';
import Album from './actions/Album';

export const Main = () => {
  const [action, setAction] = useState<string | null>(null);

  switch (action) {
    case 'discograhy': return <Discography />;
    case 'album': return <Album />;
    default: return <ChooseAction handleSelect={setAction} />;
  }
};
