interface Recipe {
  name: string;
  time: number;
}

type AddRecipe = (name: string, time: number) => void;
