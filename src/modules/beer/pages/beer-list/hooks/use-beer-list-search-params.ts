import { useSearchParams } from 'react-router-dom';

import { beerListFilterParam, beerListSearchParam } from '../beer-list.constants';

export const useBeerListSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showMyBeers = searchParams.get(beerListSearchParam.filter) === beerListFilterParam.myBeers;

  return {
    isMyBeersSelected: showMyBeers,
    setSearchParams
  };
};
