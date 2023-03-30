import React from 'react';
import { InfiniteData } from '@tanstack/react-query';

import { IBeer } from '../../beer.types';
import BeerItem from '../../components/beer-item';
import LoadMore from '../../../../components/load-more';
import { useFetchBeerList } from './hooks/use-beer-list-request';
import LoadingIndicator from '../../../../components/loading-indicator';

function BeerList() {
  const { data: beerListData, isLoading, error, fetchNextPage, isFetchingNextPage } = useFetchBeerList();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!beerListData) {
    return <p>no data...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <main className="container">
        <BeerListComponent beerListData={beerListData} />
        <LoadMore handleLoadMore={fetchNextPage} isLoading={isFetchingNextPage} />
      </main>
    </div>
  );
}

function BeerListComponent({ beerListData }: { beerListData: InfiniteData<IBeer[]> }) {
  return (
    <>
      {beerListData.pages.map((group, index) => (
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
