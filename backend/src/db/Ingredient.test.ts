import * as Ingredient from './Ingredient'

describe('Ingredient', () => {
  test('CRUD', async () => {
    const ingredientID = await Ingredient.insert({
      name: 'basilika'
    })

    const ingredient = await Ingredient.find(ingredientID)
    expect(ingredient!.id).not.toBeUndefined()
    expect(ingredient!.name).toEqual('basilika')
  })
})
