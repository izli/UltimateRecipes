import express from 'express'
import { urlencoded, json } from 'body-parser'
import environment, { NodeEnv } from './environment'

import indexRoutes from './api/index'
import userRoutes from './api/users'

export const app = express()

app.use(urlencoded({ extended: false }))
app.use(json())

app.use('/', indexRoutes)
app.use('/', userRoutes)

export const server = app.listen(environment.port, () => {
  if (environment.nodeEnv !== NodeEnv.test) {
    console.log(`App is listening on port: ${environment.port}`)
  }
})
