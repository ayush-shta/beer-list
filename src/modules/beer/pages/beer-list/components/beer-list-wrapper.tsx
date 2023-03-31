import React from 'react';

interface IBeerListWrapperProps {
  children: React.ReactNode;
}

function BeerListWrapper({ children }: IBeerListWrapperProps) {
  return (
    <div className="@container">
      <div className="@5xl:grid @5xl:grid-cols-2 grid gap-8 mb-4">{children}</div>
    </div>
  );
}

export default BeerListWrapper;
