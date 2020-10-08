import React, { useEffect, useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { CreateHeader } from "./Header";
import { SearchRecipe } from "./SearchRecipe";
import { GetAllRecipes } from "./APIClient";
import { RecipeList } from "./RecipeList";
import { AddRecipeForm } from "./AddRecipeForm";
import {
  useHistory,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { User } from "./models/user";

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

  const history = useHistory();

  const [isLoading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState(initialRecipes);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    GetAllRecipes().then((data) => {
      initialRecipes = data;
      setRecipes(initialRecipes);
      setLoading(false);
    });
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading recipes</div>;
  }

  const addRecipe: AddRecipe = (name: string, time: number) => {
    const newRecipe = { name, time };
    console.log(newRecipe);
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <CreateHeader setUser={setUser} user={user} />
      {user && (
        <>
          <div className={myStyles.mainContent}>
            <SearchRecipe />
          </div>
          <div className={myStyles.mainContent}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/addRecipe")}
            >
              Add New Recipe
            </Button>
          </div>
          <div>
            <RecipeList recipes={recipes} />
          </div>
        </>
      )}
      {!user && (
        <>
          <div className={myStyles.mainContent}>
            Please log in to see the recipes
          </div>
        </>
      )}
    </div>
  );
}

export default App;
