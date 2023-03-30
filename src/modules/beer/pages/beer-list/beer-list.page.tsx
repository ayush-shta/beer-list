import React from 'react';
import { useFetchBeerList } from './hooks/use-beer-list-request';

function BeerList() {
  const { data, isLoading, error } = useFetchBeerList();

  console.log('data', data);

  return <div className="mt-4 text-gray-400 bg-primary">BeerList</div>;
}

export default BeerList;
