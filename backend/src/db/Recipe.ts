import { sql } from 'slonik'
import pool from '../slonik'

export interface RecipeBeforeSaving {
  name: string
  time: number
}

export interface Recipe extends RecipeBeforeSaving {
  id: string
}

export async function insert(recipe: RecipeBeforeSaving): Promise<string> {
  return pool.oneFirst(sql`
    INSERT INTO
      recipes(name, time)
    VALUES
      (${recipe.name}, ${recipe.time})
    RETURNING id
  `) as Promise<string>
}

export async function find(id: string): Promise<Recipe> {
  return pool.maybeOne<Recipe>(sql`
    SELECT *
    FROM recipes
    WHERE
      id = ${id}
  `)
}

export async function select(): Promise<Recipe[]> {
  return pool.many<Recipe>(sql`
    SELECT *
    FROM recipes
  `)
}
