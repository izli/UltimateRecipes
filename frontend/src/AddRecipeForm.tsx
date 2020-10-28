import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SendRecipe } from "./APIClient";

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
    headLine: {},
  })
);

interface Props {
  addRecipe: (headline: string, time: number) => void;
}

const defaultRecipe = { headline: "", time: 0 };

const useRecipeForm = () => {
  const [details, setDetails] = useState<Details>(defaultRecipe);

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
            name="name"
            required
            label="Name of the dish"
            onChange={handleInputChange}
            value={details.headline}
          />
          {"  "}
          <TextField
            id="time"
            name="time"
            required
            label="Cooking time"
            value={details.time}
            onChange={handleInputChange}
          />
        </Grid>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Grid>
    </div>
  );
};
