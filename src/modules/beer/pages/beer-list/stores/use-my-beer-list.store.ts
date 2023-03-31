import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IBeer } from 'src/modules/beer/beer.types';

interface IMyBeerListState {
  beers: IBeer[];
  addBeer: (beer: IBeer) => void;
}

export const useByBeerListStore = create<IMyBeerListState>()(
  persist(
    (set, get) => ({
      beers: [],
      addBeer: (beer) => set((state) => ({ beers: [beer, ...state.beers] }))
    }),
    {
      name: 'my-beer-list'
    }
  )
);
