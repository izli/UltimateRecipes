interface Recipe {
  headline: string;
  time: number;
  instructions: string;
  image_url: string;
}

type Details = {
  headline: string;
  time: number;
  instructions: string;
  image_url: string;
};

type Ingredient = {
  quantity: string;
  unit_id: string;
  ingredient_id: string;
  recipe_id: string;
};

type AddIngredient = (
  quantity: string,
  unit_id: string,
  ingredient_id: string,
  recipe_id: string
) => void;
