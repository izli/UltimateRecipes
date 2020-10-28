import request from 'supertest'
import { app } from '../server'

import * as Ingredient from '../db/Ingredient'

describe('ingredients API', () => {
  test('returning ingredient', async () => {
    const ingredientId = await Ingredient.insert({ name: 'basilika' })

    const response = await request(app).get(`/ingredients/${ingredientId}`)
    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual('basilika')
  })
})
