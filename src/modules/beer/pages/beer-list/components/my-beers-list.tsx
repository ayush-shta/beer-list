import React from 'react';

import EmptyMessage from 'src/components/empty-message';
import AddNewBeerForm from './add-new-beer-form';

function MyBeersList() {
  if (false) {
    return (
      <EmptyMessage message="Nothing to see yet.">
        <button className="text-primary">Click here</button> to add your first beer!
      </EmptyMessage>
    );
  }

  return (
    <main className="@container">
      <AddNewBeerForm />
    </main>
  );
}

export default MyBeersList;
