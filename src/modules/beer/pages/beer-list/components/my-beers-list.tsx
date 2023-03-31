import React from 'react';

import EmptyMessage from 'src/components/empty-message';
import { useBeerListContext } from '../beer-list.context';
import { useByBeerListStore } from '../stores/use-my-beerlist.store';
import BeerItem from 'src/modules/beer/components/beer-item';

function MyBeersList() {
  const { showAddBeerForm } = useBeerListContext();
  const myBeers = useByBeerListStore((state) => state.beers);

  if (myBeers.length === 0) {
    return (
      <EmptyMessage message="Nothing to see yet.">
        <button className="text-primary" onClick={showAddBeerForm}>
          Click here
        </button>{' '}
        to add your first beer!
      </EmptyMessage>
    );
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
