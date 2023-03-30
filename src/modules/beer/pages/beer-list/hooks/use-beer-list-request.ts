import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { getAllBeers } from '../../../beer.service';

export const useFetchBeerList = () => {
  return useQuery<any, AxiosError, any[]>({ queryKey: ['beer-list'], queryFn: getAllBeers });
};
