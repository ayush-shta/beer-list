import React, { useMemo } from 'react';

import Card from 'src/components/card';
import { IBeer } from '../beer.types';
interface IBeerProps {
  beer: IBeer;
}

function BeerItem(props: IBeerProps) {
  const { beer } = props;

  const ingredients = beer.ingredients;

  const ingredientsText = useMemo(
    () =>
      (() => {
        if (!ingredients) {
          return 'Ingredients list not available';
        }

        const ingredientsList = [...ingredients.hops, ...ingredients.malt].map((ingredient) => ingredient.name);
        ingredientsList.push(ingredients.yeast);

        return `Ingredients: ${ingredientsList.join(', ')}`;
      })(),
    []
  );

  return (
    <Card>
      <article className="grid grid-cols-[1fr_8fr] gap-4 items-center">
        <img src={beer.image_url} className="object-scale-down w-24 h-32" alt="beer image" title={ingredientsText} />
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
