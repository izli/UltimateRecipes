import * as Knex from 'knex'

export async function up(knex: Knex) {
  return knex.raw('create extension if not exists "uuid-ossp"')
}

export async function down(knex: Knex) {
  return knex.raw('drop extension if exists "uuid-ossp"')
}
