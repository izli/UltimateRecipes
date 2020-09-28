require('ts-node').register({
  transpileOnly: true
})

const config = require('./src/knex').config

module.exports = config
