import React, { useEffect, useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { CreateHeader } from "./Header";
import { SearchRecipe } from "./SearchRecipe";
import { GetAllRecipes } from "./APIClient";
import { RecipeList } from "./RecipeList";

const createStyles = makeStyles(() => ({
  mainContent: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2em",
  },
}));

let initialRecipes: Recipe[] = [];

function App() {
  const myStyles = createStyles();

  const [isLoading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState(initialRecipes);

  useEffect(() => {
    GetAllRecipes().then((data) => {
      initialRecipes = data;
      setRecipes(initialRecipes);
      setLoading(false);
    });
  });

  if (isLoading) {
    return <div>Loading recipes</div>;
  }

  return (
    <div>
      <CreateHeader />
      <div className={myStyles.mainContent}>
        <SearchRecipe />
      </div>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
