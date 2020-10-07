import { GetUser } from "./APIClient";
import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { User } from "./models/user";

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

type Props = {
  setUser: React.Dispatch<React.SetStateAction<null | User>>;
};

export function CreateHeader(props: Props) {
  const myStyles = createStyles();
  const [textValue, setTextValue] = useState("");
  const [username, setUsername] = useState("");
  const userData = useLoginUser(username);
  props.setUser(userData);
  console.log(userData);

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
            onChange={(event) => setTextValue(event.target.value)}
            value={textValue}
          ></TextField>
        </div>
        <div className={myStyles.flexDisplay}>
          <Button
            variant="contained"
            color="primary"
            className={myStyles.loginButton}
            onClick={() => setUsername(textValue)}
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}

export function useLoginUser(username: String) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (username.length > 0) {
      GetUser(username, setUser);
    }
  }, [username]);
  return user;
}
