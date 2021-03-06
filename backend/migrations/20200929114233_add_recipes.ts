import * as Knex from 'knex'

const tableName = 'recipes'

export async function up(knex: Knex) {
  await knex.schema.createTable(tableName, t => {
    t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    t.string('name')
    t.integer('time')

    // TODO: Add your columns
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName)
}
