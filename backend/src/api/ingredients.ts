import { Router } from 'express'

import * as Ingredient from '../db/Ingredient'

const routes = Router()

routes.get('/ingredients/:id', async (req, res) => {
  const ingredient = await Ingredient.find(req.params.id)

  if (ingredient) {
    return res.json(ingredient)
  } else {
    return res.status(404).json({ message: 'not found' })
  }
})

routes.get('/ingredients', async (req, res) => {
  const ingredients = await Ingredient.select()
  if (ingredients) {
    return res.json(ingredients)
  } else {
    return res.status(404).json({ message: 'not found' })
  }
})

routes.post('/ingredients/', async (req, res) => {
  const ingredient = await Ingredient.insert(req.body)
  if (ingredient) {
    return res.json(ingredient)
  } else {
    return res.status(404).json({ message: "couldn't add recipe" })
  }
})

export default routes
