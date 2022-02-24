import { createContext } from 'react';

const AppContext = createContext<{
  viewCount: number;
}>({
  viewCount: 0
});

export { AppContext };
