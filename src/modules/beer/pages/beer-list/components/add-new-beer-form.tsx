import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import AppButton from 'src/components/app-button';
import InputField from 'src/components/formik/InputField';

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

const handleSubmit = (values: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
  setTimeout(() => {
    console.log('values', values);

    setSubmitting(false);
  }, 1000);
};

function AddNewBeerForm() {
  return (
    <Formik initialValues={initialFormValues} validationSchema={AddNewBeerSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <InputField name="beerName" labelText="Beer Name" isRequired />
          <InputField name="tagLine" labelText="Tagline" isRequired />
          <InputField name="description" labelText="Description" isRequired as="textarea" />

          <div className="flex gap-4 justify-end">
            <AppButton disabled={isSubmitting} buttonType="secondary">
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
