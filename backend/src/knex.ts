import Knex from 'knex'

import environment from './environment'

export const config = {
  client: 'pg',
  connection: environment.databaseUrl,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations'
  },
  timezone: 'UTC'
}

function connect(): Knex {
  return Knex(config)
}

export default connect()
