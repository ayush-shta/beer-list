import { httpInstance } from '../../services/http';

const BASE_BEERS_URL = './beers';

export const getAllBeers = async () => {
  const response = await httpInstance.get(BASE_BEERS_URL);

  return response.data;
};
