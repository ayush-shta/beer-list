import React from 'react';

import EmptyMessage from 'src/components/empty-message';
import { useAddBeerDialogStore } from '../stores/use-add-beer-dialog.store';

function EmptyMyBeerList() {
  const { showAddBeerForm } = useAddBeerDialogStore();

  return (
    <EmptyMessage message="Nothing to see yet.">
      <button className="text-primary" onClick={showAddBeerForm}>
        Click here
      </button>{' '}
      to add your first beer!
    </EmptyMessage>
  );
}

export default EmptyMyBeerList;
