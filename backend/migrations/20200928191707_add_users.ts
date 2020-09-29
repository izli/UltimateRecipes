import * as Knex from 'knex'

const tableName = 'users'

export async function up(knex: Knex) {
  await knex.schema.createTable(tableName, t => {
    t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    t.string('name')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName)
}
