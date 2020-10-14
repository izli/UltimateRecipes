import React from "react";
import Axios from "axios";
import { setupMaster } from "cluster";
import { User } from "./models/user";

const api = "http://localhost:3000/";

export async function GetAllRecipes() {
  return await Axios.get(api + "recipes").then((response) => response.data);
}

export function SendRecipe(recipeBody: Details) {
  Axios.post(api + "recipes", {
    name: recipeBody.name,
    time: recipeBody.time,
  }).then((response) => {
    console.log(response);
  });
  return Axios.get(api + "recipes").then((response) => response.data);
}

export function GetUser(
  username: String,
  setUser: (user: User | null) => void
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

export function LogOutUser(setUser: (user: User | null) => void) {
  fetch(`http://localhost:3000/users/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    setUser(null);
  });
}
