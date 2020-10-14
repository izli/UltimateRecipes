import { sql } from 'slonik'
import pool from '../slonik'

export interface IngredientBeforeSaving {
  name: string
}

export interface Ingredient extends IngredientBeforeSaving {
  id: string
}

export async function insert(
  ingredient: IngredientBeforeSaving
): Promise<string> {
  return pool.oneFirst(sql`
    INSERT INTO
      ingredients(name)
    VALUES
      (${ingredient.name})
    RETURNING id
  `) as Promise<string>
}

export async function find(id: string): Promise<Ingredient | null> {
  return pool.maybeOne<Ingredient>(sql`
    SELECT *
    FROM ingredients
    WHERE
      id = ${id}
  `)
}

export async function select(): Promise<Ingredient[]> {
  return pool.any<Ingredient>(sql`
    SELECT *
    FROM ingredients
  `)
}
