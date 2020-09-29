import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { create } from "domain";

const createStyles = makeStyles(() => ({
  searchField: {
    width: "20em",
  },
}));

export function SearchRecipe() {
  const myStyles = createStyles();
  return (
    <div>
      <TextField
        id="standard-search"
        label="Search a recipe, ingredient or type"
        type="search"
        className={myStyles.searchField}
      />
    </div>
  );
}
