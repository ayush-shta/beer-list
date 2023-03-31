import React from 'react';

interface IAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonstyle?: 'primary' | 'secondary';
}

function AppButton(props: IAppButtonProps) {
  const { buttonstyle } = props;

  if (buttonstyle === 'secondary') {
    return <SecondaryButton {...props} />;
  }

  return <PrimaryButton {...props} />;
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function PrimaryButton(props: IButtonProps) {
  return (
    <button
      {...props}
      className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded disabled:opacity-25 disabled:cursor-not-allowed"
    />
  );
}

function SecondaryButton(props: IButtonProps) {
  return (
    <button
      {...props}
      className="bg-white hover:bg-gray-light text-gray border border-gray rounded shadow font-bold py-2 px-4 disabled:opacity-25 disabled:cursor-not-allowed"
    />
  );
}

export default AppButton;
