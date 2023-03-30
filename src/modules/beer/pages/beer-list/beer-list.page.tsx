import React from 'react';
import Card from '../../../../components/card';
import BeerItem from '../../components/beer-item';
import { useFetchBeerList } from './hooks/use-beer-list-request';

function BeerList() {
  const { data: beerList, isLoading, error } = useFetchBeerList(1);

  if (isLoading) {
    return <p>isLoading...</p>;
  }

  if (!beerList) {
    return <p>no data...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <main className="container">
        {beerList.map((beer) => (
          <BeerItem key={beer.id} beer={beer} />
        ))}
      </main>
    </div>
  );
}

export default BeerList;
