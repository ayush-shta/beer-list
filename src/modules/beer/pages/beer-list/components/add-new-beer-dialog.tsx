import React from 'react';

import ModalDialog from 'src/components/ModalDialog';
import AddNewBeerForm from './add-new-beer-form';
import { useBeerListContext } from '../beer-list.context';
import houzzBeerImage from 'src/assets/houzz-beer.jpg';

function AddNewBeerDialog() {
  const { isAddBeerFormVisible } = useBeerListContext();

  return (
    <ModalDialog isOpen={isAddBeerFormVisible} title={'Add a New Beer'}>
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
