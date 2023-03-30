import React from 'react';
import { InfiniteData } from '@tanstack/react-query';

import LoadMore from 'src/components/load-more';
import { IBeer } from 'src/modules/beer/beer.types';
import EmptyMessage from 'src/components/empty-message';
import BeerItem from 'src/modules/beer/components/beer-item';
import LoadingIndicator from 'src/components/loading-indicator';
import { useFetchBeerList } from '../hooks/use-beer-list-request';
import ErrorMessage from 'src/components/error-message';

function AllBeerList() {
  const { data: beerListInfiniteData, isLoading, error, fetchNextPage, isFetchingNextPage } = useFetchBeerList();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message="Error fetching beer list. Please try again later." />;
  }

  if (!beerListInfiniteData) {
    return <EmptyMessage message="No beers at the moment." />;
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
