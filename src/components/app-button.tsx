import React from 'react';

interface IAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function AppButton(props: IAppButtonProps) {
  return <button {...props} className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded" />;
}

export default AppButton;
