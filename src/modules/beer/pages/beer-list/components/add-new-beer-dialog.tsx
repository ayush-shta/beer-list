import React from 'react';

import ModalDialog from 'src/components/ModalDialog';
import AddNewBeerForm from './add-new-beer-form';
import { useBeerListContext } from '../beer-list.context';

function AddNewBeerDialog() {
  const { isAddBeerFormVisible } = useBeerListContext();

  return (
    <ModalDialog isOpen={isAddBeerFormVisible} title={'Add a New Beer'}>
      <AddNewBeerForm />
    </ModalDialog>
  );
}

export default AddNewBeerDialog;
