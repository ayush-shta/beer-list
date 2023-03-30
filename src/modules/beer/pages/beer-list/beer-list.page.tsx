import React from 'react';
import { InfiniteData } from '@tanstack/react-query';

import Page from 'src/components/page';
import LoadMore from 'src/components/load-more';
import BeerItem from '../../components/beer-item';
import LoadingIndicator from 'src/components/loading-indicator';
import { useFetchBeerList } from './hooks/use-beer-list-request';

function BeerList() {
  const { data: beerListInfiniteData, isLoading, error, fetchNextPage, isFetchingNextPage } = useFetchBeerList();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!beerListInfiniteData) {
    return <p>no data...</p>;
  }

  return (
    <Page>
      <main className="@container">
        <div className="@5xl:grid @5xl:grid-cols-2">
          <BeerListComponent beerListInfiniteData={beerListInfiniteData} />
        </div>
        <LoadMore handleLoadMore={fetchNextPage} isLoading={isFetchingNextPage} />
      </main>
    </Page>
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

export default BeerList;
