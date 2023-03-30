import { httpInstance } from '../../services/http';

const BASE_BEERS_URL = './beers';

export const getAllBeers = async (page: number, perPage?: number) => {
  const response = await httpInstance.get(BASE_BEERS_URL, {
    params: {
      page,
      per_page: perPage || 10
    }
  });

  return response.data;
};
