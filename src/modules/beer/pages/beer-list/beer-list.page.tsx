import React from 'react';

import Page from 'src/components/page';
import AllBeerList from './components/all-beers-list';
import MyBeersList from './components/my-beers-list';
import BeerListNav from './components/beer-list-nav';
import { useBeerListSearchParams } from './hooks/use-beer-list-search-params';

function BeerList() {
  const { isMyBeersSelected } = useBeerListSearchParams();

  return (
    <Page>
      <>
        <BeerListNav />
        {isMyBeersSelected ? <MyBeersList /> : <AllBeerList />}
      </>
    </Page>
  );
}

export default BeerList;
