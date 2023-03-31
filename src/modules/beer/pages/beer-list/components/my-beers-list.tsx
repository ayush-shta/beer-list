import React from 'react';

import EmptyMyBeerList from './empty-my-beer-list';
import BeerListWrapper from './beer-list-wrapper';
import BeerItem from 'src/modules/beer/components/beer-item';
import { useByBeerListStore } from '../stores/use-my-beer-list.store';

function MyBeersList() {
  const myBeers = useByBeerListStore((state) => state.beers);

  if (myBeers.length === 0) {
    return <EmptyMyBeerList />;
  }

  return (
    <main>
      <BeerListWrapper>
        {myBeers.map((beer) => (
          <BeerItem key={beer.id} beer={beer} />
        ))}
      </BeerListWrapper>
    </main>
  );
}

export default MyBeersList;
