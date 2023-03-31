import React from 'react';
import { Field, FieldAttributes } from 'formik';

import Label from './Label';
import FormErrorMessage from './FormErrorMessage';

interface IInputFieldProps extends FieldAttributes<any> {
  labelText: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
}

function InputField(props: IInputFieldProps) {
  const { labelText, name, isRequired, placeholder, ...restProps } = props;

  return (
    <div className="mb-4">
      <Label labelText={labelText} name={name} isRequired={isRequired} />
      <Field
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-primary"
        id={name}
        name={name}
        type="text"
        placeholder={placeholder || labelText}
        {...restProps}
      />
      <FormErrorMessage name={name} />
    </div>
  );
}

export default InputField;
