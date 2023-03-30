import React from 'react';
import { InfiniteData } from '@tanstack/react-query';

import LoadMore from 'src/components/load-more';
import { IBeer } from 'src/modules/beer/beer.types';
import BeerItem from 'src/modules/beer/components/beer-item';
import LoadingIndicator from 'src/components/loading-indicator';
import { useFetchBeerList } from '../hooks/use-beer-list-request';

function AllBeerList() {
  const { data: beerListInfiniteData, isLoading, error, fetchNextPage, isFetchingNextPage } = useFetchBeerList();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!beerListInfiniteData) {
    return <p>no data...</p>;
  }

  return (
    <main className="@container">
      <div className="@5xl:grid @5xl:grid-cols-2">
        <BeerListComponent beerListInfiniteData={beerListInfiniteData} />
      </div>
      <LoadMore handleLoadMore={fetchNextPage} isLoading={isFetchingNextPage} />
    </main>
  );
}

function BeerListComponent({ beerListInfiniteData }: { beerListInfiniteData: InfiniteData<IBeer[]> }) {
  return (
    <>
      {beerListInfiniteData.pages.map((group, index) => (
        <React.Fragment key={index}>
          {group.map((beer) => (
            <BeerItem key={beer.id} beer={beer} />
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

export default AllBeerList;
