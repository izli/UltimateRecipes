import { GetUser, LogOutUser } from "./APIClient";
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
    marginRight: "1.5em",
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
  setUser: (user: User | null) => void;
  user: User | null;
};

export function CreateHeader(props: Props) {
  const myStyles = createStyles();
  const [textValue, setTextValue] = useState("");
  const [username, setUsername] = useState("");
  GetOrLogoutUser(username, props.setUser);
  console.log(props.user);

  return (
    <div className={myStyles.headerStyle}>
      <Typography variant="h1" className={myStyles.headerH1}>
        Ultimate recipes
      </Typography>
      {!props.user && (
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
      )}
      {props.user && (
        <div className={myStyles.loginFields}>
          <div>Hello {props.user.name}!</div>
          <div className={myStyles.flexDisplay}>
            <Button
              variant="contained"
              color="primary"
              className={myStyles.loginButton}
              onClick={() => {
                setUsername("");
                setTextValue("");
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function GetOrLogoutUser(
  username: String,
  setUser: (user: User | null) => void
) {
  // const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (username != "") {
      GetUser(username, setUser);
    } else {
      LogOutUser(setUser);
    }
  }, [username]);
}
