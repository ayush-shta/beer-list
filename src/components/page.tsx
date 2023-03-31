import React from 'react';

interface IPageProps {
  children: React.ReactNode;
}

function Page({ children }: IPageProps) {
  return (
    <div className="@container">
      <div className="max-w-full @xl:mx-16 mx-4 @xl:my-8 my-4">{children}</div>
    </div>
  );
}

export default Page;
