import { sql } from 'slonik'
import pool from '../slonik'

export interface RecipeBeforeSaving {
  headline: string
  time: number
  instructions: string
  image: string
}

export interface Recipe extends RecipeBeforeSaving {
  id: string
}

export async function insert(recipe: RecipeBeforeSaving): Promise<string> {
  return pool.oneFirst(sql`
    INSERT INTO
      recipes(headline, time, instructions, image)
    VALUES
      (${recipe.headline}, ${recipe.time}, ${recipe.instructions}, ${recipe.image})
    RETURNING id
  `) as Promise<string>
}

export async function find(id: string): Promise<Recipe | null> {
  return pool.maybeOne<Recipe>(sql`
    SELECT *
    FROM recipes
    WHERE
      id = ${id}
  `)
}

export async function select(): Promise<Recipe[]> {
  return pool.any<Recipe>(sql`
    SELECT *
    FROM recipes
  `)
}

export async function addRecipe(
  recipe: RecipeBeforeSaving,
  ingredients: { ingredient_id: string; quantity: string; unit_id: string }[]
) {
  const recipe_id = await insert(recipe)

  await Promise.all(
    ingredients.map(ingredient => {
      return pool.many(sql`
      INSERT INTO
        recipe_ingredients(quantity, unit_id, recipe_id, ingredients_id)
      VALUES
        (${ingredient.quantity}, ${ingredient.unit_id}, ${recipe_id}, ${ingredient.ingredient_id})
    `)
    })
  )
  return recipe_id
}
