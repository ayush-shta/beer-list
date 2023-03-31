import React from 'react';

interface IAddButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function AddButton(props: IAddButtonProps) {
  return (
    <button
      {...props}
      className="bg-primary hover:bg-primary-light text-white rounded-full shadow font-bold h-12 w-12 leading-none disabled:opacity-25 disabled:cursor-not-allowed"
    >
      +
    </button>
  );
}

export default AddButton;
