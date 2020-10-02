import React from 'react';
import Axios from 'axios'

const api = 'http://localhost:3000/';

export async function GetAllRecipes() {
    return await Axios.get(api + 'recipes').then(response => response.data)
}