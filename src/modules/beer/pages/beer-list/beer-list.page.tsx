import React from 'react';
import BeerItem from '../../components/beer-item';
import { useFetchBeerList } from './hooks/use-beer-list-request';

function BeerList() {
  const { data: beerListData, isLoading, error, fetchNextPage, isFetchingNextPage } = useFetchBeerList();

  if (isLoading) {
    return <p>isLoading...</p>;
  }

  if (!beerListData) {
    return <p>no data...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <main className="container">
        {beerListData.pages.map((group, index) => (
          <React.Fragment key={index}>
            {group.map((beer) => (
              <BeerItem key={beer.id} beer={beer} />
            ))}
          </React.Fragment>
        ))}
        <p
          className="flex justify-center text-sm text-primary font-semibold cursor-pointer"
          onClick={() => fetchNextPage()}
        >
          Load More
        </p>
      </main>
    </div>
  );
}

export default BeerList;
