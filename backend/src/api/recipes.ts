import { Router } from 'express'

import * as Recipe from '../db/Recipe'

const routes = Router()

routes.get('/recipes/:id', async (req, res) => {
  const recipe = await Recipe.find(req.params.id)

  if (recipe) {
    return res.json(recipe)
  } else {
    return res.status(404).json({ message: 'not found' })
  }
})

routes.get('/recipes', async (req, res) => {
  const recipes = await Recipe.select()
  if (recipes) {
    return res.json(recipes)
  } else {
    return res.status(404).json({ message: 'not found' })
  }
})

routes.post('/recipes/', async (req, res) => {
  const recipe = await Recipe.insert(req.body)
  if (recipe) {
    return res.json(recipe)
  } else {
    return res.status(404).json({ message: "couldn't add recipe" })
  }
})

export default routes
