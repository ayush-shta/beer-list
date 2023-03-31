export interface IBeer {
  id: string;
  name: string;
  tagline: string;
  image_url?: string;
  description: string;
  ingredients?: {
    malt: IIngredientItem[];
    hops: IIngredientItem[];
    yeast: string;
  };
}

interface IIngredientItem {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}
