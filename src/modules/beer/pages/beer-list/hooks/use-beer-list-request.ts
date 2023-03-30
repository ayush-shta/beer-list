import { AxiosError } from 'axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { getAllBeers } from '../../../beer.service';
import { IBeer } from '../../../beer.types';

export const useFetchBeerList = (perPage?: number) => {
  return useInfiniteQuery<IBeer[], AxiosError>({
    queryKey: ['beer-list'],
    queryFn: getAllBeers,
    getNextPageParam: (_lastPage, pages) => {
      return pages.length + 1;
    }
  });
};
