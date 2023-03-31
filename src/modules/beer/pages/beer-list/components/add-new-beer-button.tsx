import React from 'react';

import AppButton from 'src/components/app-button';
import AddButton from 'src/components/add-button';
import { useAddBeerDialogStore } from '../stores/use-add-beer-dialog.store';

function AddNewBeerButton() {
  const { showAddBeerForm } = useAddBeerDialogStore();

  return (
    <>
      <div className="@xl:block hidden">
        <AppButton onClick={showAddBeerForm}>Add a new beer</AppButton>
      </div>
      <div className="@xl:hidden visible">
        <AddButton onClick={showAddBeerForm} />
      </div>
    </>
  );
}

export default AddNewBeerButton;
