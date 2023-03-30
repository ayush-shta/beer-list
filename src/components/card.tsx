import React from 'react';

interface ICardProps {
  children: React.ReactNode;
}

function Card({ children }: ICardProps) {
  return (
    <div className="rounded overflow-hidden shadow-lg p-6 hover:bg-primary-light m-4 cursor-pointer">{children}</div>
  );
}

export default Card;
