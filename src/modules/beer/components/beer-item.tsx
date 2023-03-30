import React from 'react';
import Card from '../../../components/card';

import { IBeer } from '../beer.types';

interface IBeerProps {
  beer: IBeer;
}

function BeerItem(props: IBeerProps) {
  const { beer } = props;

  return (
    <Card>
      <article className="grid grid-cols-[1fr_8fr] gap-4 align-middle">
        <img src={beer.image_url} className="object-scale-down w-24 h-32" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{beer.name}</h2>
          <p className="text-sm text-secondary mb-2">{beer.tagline}</p>
          <p className="text-base">{beer.description}</p>
        </div>
      </article>
    </Card>
  );
}

export default BeerItem;
