import * as express from 'express'
import { urlencoded, json } from 'body-parser'
import environment, { NodeEnv } from './environment'

import indexRoutes from './api/index'
import userRoutes from './api/users'
import recipeRoutes from './api/recipes'

export const app = express()
const cors = require('cors')

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cors())

app.use('/', indexRoutes)
app.use('/', userRoutes)
app.use('/', recipeRoutes)

export const server = app.listen(environment.port, () => {
  if (environment.nodeEnv !== NodeEnv.test) {
    console.log(`App is listening on port: ${environment.port}`)
  }
})
