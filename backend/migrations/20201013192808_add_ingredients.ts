import * as Knex from 'knex'

const tableName = 'ingredients'

export async function up(knex: Knex) {
  await knex.raw(`
    CREATE TABLE ${tableName} (
      id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
      name text
  )
`)
}

export async function down(knex: Knex) {
  return knex.raw(`
    DROP TABLE ${tableName}
  `)
}
