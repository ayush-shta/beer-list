import React from 'react';

import Page from 'src/components/page';
import AllBeerList from './components/all-beers-list';
import MyBeersList from './components/my-beers-list';
import BeerListNav from './components/beer-list-nav';
import { useBeerListSearchParams } from './hooks/use-beer-list-search-params';
import AddNewBeerDialog from './components/add-new-beer-dialog';
import { BeerListContextProvider } from './beer-list.context';

function BeerList() {
  const { isMyBeersSelected } = useBeerListSearchParams();

  return (
    <Page>
      <BeerListContextProvider>
        <BeerListNav />
        {isMyBeersSelected ? <MyBeersList /> : <AllBeerList />}
        <AddNewBeerDialog />
      </BeerListContextProvider>
    </Page>
  );
}

export default BeerList;
