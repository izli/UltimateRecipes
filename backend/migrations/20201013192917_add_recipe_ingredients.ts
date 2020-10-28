import * as Knex from 'knex'

const tableName = 'recipe_ingredients'

export async function up(knex: Knex) {
  await knex.raw(`
    CREATE TABLE ${tableName} (
      id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
      quantity text,
      unit_id uuid REFERENCES units(id) NOT NULL,
      recipe_id uuid REFERENCES recipes(id),
      ingredients_id uuid REFERENCES ingredients(id)
    )
  `)
}

export async function down(knex: Knex) {
  return knex.raw(`
    DROP TABLE ${tableName}
  `)
}
