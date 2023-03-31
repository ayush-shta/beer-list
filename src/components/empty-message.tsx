import React from 'react';

interface IEmptyMessageProps {
  message: string;
  children?: React.ReactNode;
}

function EmptyMessage(props: IEmptyMessageProps) {
  const { message, children } = props;

  return (
    <div className="min-h-screen p-8 text-center bg-gray-light flex flex-col items-center pt-64">
      <p className="text-base text-gray font-semibold">{message}</p>
      {children ? <p className="text-base text-gray font-semibold">{children}</p> : null}
    </div>
  );
}

export default EmptyMessage;
