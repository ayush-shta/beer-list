import React from 'react';

import EmptyMyBeerList from './empty-my-beer-list';
import BeerItem from 'src/modules/beer/components/beer-item';
import { useByBeerListStore } from '../stores/use-my-beer-list.store';

function MyBeersList() {
  const myBeers = useByBeerListStore((state) => state.beers);

  if (myBeers.length === 0) {
    return <EmptyMyBeerList />;
  }

  return (
    <main className="@container">
      {myBeers.map((beer) => (
        <BeerItem key={beer.id} beer={beer} />
      ))}
    </main>
  );
}

export default MyBeersList;
