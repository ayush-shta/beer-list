import React from 'react';
import { ErrorMessage, ErrorMessageProps } from 'formik';

interface IFormErrorMessageProps extends ErrorMessageProps {
  name: string;
}

function FormErrorMessage(props: IFormErrorMessageProps) {
  const { name, ...restProps } = props;

  return <ErrorMessage className="text-xs italic text-error mt-2" name={name} component={'div'} {...restProps} />;
}

export default FormErrorMessage;
