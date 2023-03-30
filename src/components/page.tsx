import React from 'react';

interface IPageProps {
  children: React.ReactNode;
}

function Page({ children }: IPageProps) {
  return <div className="max-w-full m-8">{children}</div>;
}

export default Page;
