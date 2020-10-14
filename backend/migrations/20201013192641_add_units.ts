import * as Knex from 'knex'

const tableName = 'units'

export async function up(knex: Knex) {
  await knex.raw(`
    CREATE TABLE ${tableName} (
      id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
      unit_name text,
      abbreviation text
    )
  `)
}

export async function down(knex: Knex) {
  return knex.raw(`
    DROP TABLE ${tableName}
  `)
}
