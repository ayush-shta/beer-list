import React from 'react';

import ModalDialog from 'src/components/modal-dialog';
import AddNewBeerForm from './add-new-beer-form';
import houzzBeerImage from 'src/assets/houzz-beer.png';
import { useAddBeerDialogStore } from '../stores/use-add-beer-dialog.store';

function AddNewBeerDialog() {
  const { isAddBeerFormVisible, hideAddBeerForm } = useAddBeerDialogStore();

  return (
    <ModalDialog isOpen={isAddBeerFormVisible} title={'Add a New Beer'} closeModal={hideAddBeerForm}>
      <img
        src={houzzBeerImage}
        className="object-scale-down w-24 h-32 border border-gray rounded mb-4"
        alt="houzz beer"
      />
      <AddNewBeerForm />
    </ModalDialog>
  );
}

export default AddNewBeerDialog;
