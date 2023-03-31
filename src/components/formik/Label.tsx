import React from 'react';

interface IInputFieldProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  labelText: string;
  name: string;
  isRequired?: boolean;
}

function Label(props: IInputFieldProps) {
  const { labelText, name, isRequired } = props;

  return (
    <label className="block text-gray text-sm font-bold mb-2" htmlFor={name}>
      {`${labelText} ${isRequired ? '*' : ''}`}
    </label>
  );
}

export default Label;
