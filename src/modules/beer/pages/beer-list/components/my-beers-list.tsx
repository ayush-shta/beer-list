import React from 'react';

import EmptyMessage from 'src/components/empty-message';

function MyBeersList() {
  return (
    <main className="@container">
      <EmptyMessage message="Nothing to see yet.">
        <button className="text-primary">Click here</button> to add your first beer!
      </EmptyMessage>
    </main>
  );
}

export default MyBeersList;
