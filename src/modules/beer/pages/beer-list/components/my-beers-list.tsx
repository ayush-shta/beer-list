import React from 'react';

import EmptyMessage from 'src/components/empty-message';
import { useBeerListContext } from '../beer-list.context';

function MyBeersList() {
  const { showAddBeerForm } = useBeerListContext();

  if (false) {
    return (
      <EmptyMessage message="Nothing to see yet.">
        <button className="text-primary" onClick={showAddBeerForm}>
          Click here
        </button>{' '}
        to add your first beer!
      </EmptyMessage>
    );
  }

  return <main className="@container">{/* <AddNewBeerForm /> */}</main>;
}

export default MyBeersList;
