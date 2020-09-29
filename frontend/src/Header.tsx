import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const createStyles = makeStyles(() => ({
  headerStyle: {
    textAlign: "center",
    display: "flex",
    paddingTop: "1em",
  },
  headerH1: {
    fontSize: "39px",
    marginLeft: "1em",
    alignSelf: "flex-end",
  },
  loginFields: {
    marginLeft: "auto",
    marginRight: "1em",
    marginTop: "1em",
    display: "flex",
  },
  inputField: {
    alignSelf: "center",
    marginRight: "1em",
  },
  loginButton: {
    alignSelf: "flex-end",
  },
  flexDisplay: {
    display: "flex",
  },
}));

export function CreateHeader() {
  const myStyles = createStyles();
  return (
    <div className={myStyles.headerStyle}>
      <Typography variant="h1" className={myStyles.headerH1}>
        Ultimate recipes
      </Typography>
      <div className={myStyles.loginFields}>
        <div className={myStyles.flexDisplay}>
          <TextField
            label="Enter your username"
            className={myStyles.inputField}
          ></TextField>
        </div>
        <div className={myStyles.flexDisplay}>
          <Button
            variant="contained"
            color="primary"
            className={myStyles.loginButton}
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}
