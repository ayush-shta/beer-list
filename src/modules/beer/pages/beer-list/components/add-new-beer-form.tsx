import React from 'react';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form } from 'formik';

import AppButton from 'src/components/app-button';
import { IBeer } from 'src/modules/beer/beer.types';
import InputField from 'src/components/formik/InputField';
import { useByBeerListStore } from '../stores/use-my-beer-list.store';
import { useAddBeerDialogStore } from '../stores/use-add-beer-dialog.store';

interface IFormValues {
  beerName: string;
  tagLine: string;
  description: string;
}

const initialFormValues: IFormValues = {
  beerName: '',
  tagLine: '',
  description: ''
};

const AddNewBeerSchema = Yup.object().shape({
  beerName: Yup.string().required('Beer name is required'),
  tagLine: Yup.string().required('Tagline is required'),
  description: Yup.string().required('Description is required')
});

function AddNewBeerForm() {
  const { hideAddBeerForm } = useAddBeerDialogStore();
  const addBeer = useByBeerListStore((state) => state.addBeer);

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={AddNewBeerSchema}
      onSubmit={(values, { setSubmitting }) => {
        const newBeer: IBeer = {
          id: uuidv4(),
          name: values.beerName,
          tagline: values.tagLine,
          description: values.description
        };

        addBeer(newBeer);

        setSubmitting(false);
        hideAddBeerForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField name="beerName" labelText="Beer Name" isRequired />
          <InputField name="tagLine" labelText="Tagline" isRequired />
          <InputField name="description" labelText="Description" isRequired as="textarea" />

          <div className="flex gap-4 justify-end">
            <AppButton type="button" buttonstyle="secondary" onClick={hideAddBeerForm}>
              Cancel
            </AppButton>

            <AppButton type="submit" disabled={isSubmitting}>
              Save
            </AppButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddNewBeerForm;
