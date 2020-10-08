import React from "react";
import Axios from "axios";

const api = "http://localhost:3000/";

export async function GetAllRecipes() {
  return Axios.get(api + "recipes").then((response) => response.data);
}

export function GetUser(
  username: String,
  setUser: React.Dispatch<React.SetStateAction<null>>
) {
  fetch(`http://localhost:3000/users/login`, {
    method: "POST",
    body: JSON.stringify({ name: username }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((userData) => {
      setUser(userData);
    });
}
