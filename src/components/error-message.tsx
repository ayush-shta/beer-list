import React from 'react';

interface IErrorMessageProps {
  message: string;
  children?: React.ReactNode;
}

function ErrorMessage(props: IErrorMessageProps) {
  const { message, children } = props;

  return (
    <div className="min-h-screen m-4 p-8 text-center bg-gray-light flex flex-col items-center pt-64">
      <p className="text-base text-error font-semibold">{message}</p>
      {children ? <p className="text-base text-error font-semibold">{children}</p> : null}
    </div>
  );
}

export default ErrorMessage;
