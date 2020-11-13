import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SendRecipe } from "./APIClient";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bodyStyle: {
      padding: 10,
    },
    root: {
      width: 600,
      height: 150,
      display: "flex",
      background: "white",
      transition: "0.3s",
      boxShadow: "0 3px 5px 2px rgba(63, 81, 181, .3)",
      border: "1px solid lightgrey",
      "&:hover": {
        background: "#edeffa",
      },
    },
    button: {
      display: "flex",
      justifyContent: "center",
    },
    quantityTextField: {
      width: "60px",
      margin: "10px",
    },
    unitSelection: {
      width: "70px",
      margin: "10px",
    },
    ingredientSelection: {
      width: "150px",
      margin: "10px",
    },
    instructionsField: {
      width: "400px",
      margin: "10px",
    },
  })
);

interface Props {
  addRecipe: (headline: string, time: number) => void;
  addIngredient: AddIngredient;
}

const mockUnits = [
  { unit_name: "kilogram", abbreviation: "kg" },
  { unit_name: "gram", abbreviation: "g" },
  { unit_name: "liter", abbreviation: "l" },
];

const mockIngredients = [
  { name: "potato" },
  { name: "onion" },
  { name: "cream" },
];

const defaultRecipe = {
  headline: "",
  time: 0,
  instructions: "",
  image_url: "",
};

const recipeIngredients: Ingredient[] = [];

const useRecipeForm = () => {
  const [details, setDetails] = useState<Details>(defaultRecipe);
  const [ingredients, setIngredients] = useState(recipeIngredients);

  const handleSubmit = (event: React.FormEvent) => {
    if (event) {
      event.preventDefault();
      SendRecipe(details);
      setDetails(defaultRecipe);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.persist();
    setDetails((details) => ({
      ...details,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    details,
  };
};

export const AddRecipeForm: React.FC<Props> = ({ addRecipe }) => {
  const classes = useStyles();
  const { details, handleInputChange, handleSubmit } = useRecipeForm();

  return (
    <div className={classes.bodyStyle}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item xs={12}>
          <TextField
            id="headline"
            name="headline"
            required
            label="Name of the dish"
            onChange={handleInputChange}
            value={details.headline}
            variant="filled"
          />
          {"  "}
          <TextField
            id="time"
            name="time"
            required
            label="Cooking time"
            value={details.time}
            onChange={handleInputChange}
            variant="filled"
          />
          <div>Ingredients:</div>
          {recipeIngredients.map((ingredient) => (
            <TextField
              required
              label="Qty"
              id="quantity"
              name="quantity"
              variant="filled"
              size="small"
              value={ingredient.quantity}
              className={classes.quantityTextField}
            />
          ))}
          <TextField
            required
            label="Qty"
            id="quantity"
            name="quantity"
            variant="filled"
            size="small"
            className={classes.quantityTextField}
          />
          <TextField
            id="unit"
            name="unit"
            size="small"
            select
            label="Unit"
            onChange={handleInputChange}
            variant="filled"
            className={classes.unitSelection}
          >
            {mockUnits.map((unit) => (
              <MenuItem key={unit.unit_name} value={unit.unit_name}>
                {unit.abbreviation}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="ingredient"
            name="ingredient"
            size="small"
            select
            label="Ingredient"
            onChange={handleInputChange}
            variant="filled"
            className={classes.ingredientSelection}
          >
            {mockIngredients.map((ingredient) => (
              <MenuItem key={ingredient.name} value={ingredient.name}>
                {ingredient.name}
              </MenuItem>
            ))}
          </TextField>
          <div>
            <TextField
              id="instructions"
              required
              label="Cooking instructions"
              multiline
              rows={4}
              name="Cooking instructions"
              variant="filled"
              className={classes.instructionsField}
            />
          </div>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Grid>
    </div>
  );
};
