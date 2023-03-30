import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { getAllBeers } from '../../../beer.service';
import { IBeer } from '../../../beer.types';

export const useFetchBeerList = (page: number, perPage?: number) => {
  return useQuery<IBeer[], AxiosError>({
    queryKey: ['beer-list'],
    queryFn: () => getAllBeers(page, perPage)
  });
};
