import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { CreateHeader } from "./Header";
import { SearchRecipe } from "./SearchRecipe";

const createStyles = makeStyles(() => ({
  mainContent: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2em",
  },
}));

function App() {
  const myStyles = createStyles();
  return (
    <div>
      <CreateHeader />
      <div className={myStyles.mainContent}>
        <SearchRecipe />
      </div>
    </div>
  );
}

export default App;
