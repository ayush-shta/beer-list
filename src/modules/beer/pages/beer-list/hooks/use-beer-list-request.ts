import { AxiosError } from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

import { IBeer } from 'src/modules/beer/beer.types';
import { getAllBeers } from 'src/modules/beer/beer.service';

export const useFetchBeerList = () => {
  return useInfiniteQuery<IBeer[], AxiosError>({
    queryKey: ['beer-list'],
    queryFn: getAllBeers,
    getNextPageParam: (_lastPage, pages) => {
      return pages.length + 1;
    }
  });
};
