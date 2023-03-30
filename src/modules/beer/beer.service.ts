import { httpInstance } from '../../services/http';

const BASE_BEERS_URL = './beers';

export const getAllBeers = async ({ pageParam = 1 }) => {
  const response = await httpInstance.get(BASE_BEERS_URL, {
    params: {
      page: pageParam,
      per_page: 10
    }
  });

  return response.data;
};
