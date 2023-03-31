import { create } from 'zustand';

import { IBeer } from 'src/modules/beer/beer.types';

interface IMyBeerListState {
  beers: IBeer[];
  addBeer: (beer: IBeer) => void;
}

export const useByBeerListStore = create<IMyBeerListState>()((set) => ({
  beers: [],
  addBeer: (beer) => set((state) => ({ beers: [beer, ...state.beers] }))
}));
