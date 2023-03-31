import React from 'react';

interface ICardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {}

function Card(props: ICardProps) {
  return (
    <div {...props} className="rounded overflow-hidden shadow-lg p-6 hover:bg-primary-extra-light cursor-pointer" />
  );
}

export default Card;
