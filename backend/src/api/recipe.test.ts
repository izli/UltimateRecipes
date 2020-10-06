import request from 'supertest'
import { app } from '../server'

import * as Recipe from '../db/Recipe'

describe('recipes API', () => {
  test('returning recipe', async () => {
    const recipeId = await Recipe.insert({ name: 'Puuro', time: 5 })

    const response = await request(app).get(`/recipes/${recipeId}`)
    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual('Puuro')
  })
})
