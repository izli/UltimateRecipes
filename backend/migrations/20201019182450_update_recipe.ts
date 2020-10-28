import { table } from 'console'
import * as Knex from 'knex'

const tableName = 'recipes'

export async function up(knex: Knex) {
  await knex.schema.alterTable(tableName, t => {
    t.text('headline').notNullable().defaultTo('')
    t.text('instructions').notNullable().defaultTo('')
    t.text('image_url')
  })
  await knex.raw(`
    UPDATE ${tableName} SET headline = name
  `)
  await knex.schema.alterTable(tableName, t => {
    t.dropColumn('name')
  })
}

export async function down(knex: Knex) {
  await knex.schema.alterTable(tableName, t => {
    t.dropColumn('instructions')
    t.dropColumn('image_url')
    t.text('name')
  })
  await knex.raw(`
    UPDATE ${tableName} SET name = headline
  `)
  await knex.schema.alterTable(tableName, t => {
    t.dropColumn('headline')
  })
}
