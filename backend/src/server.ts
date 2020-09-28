import * as express from 'express'
import { urlencoded, json } from 'body-parser'
import environment from './environment'

import indexRoutes from './api/index'

const app = express()

app.use(urlencoded({ extended: false }))
app.use(json())

app.use('/', indexRoutes)

app.listen(environment.port, () => {
  console.log(`App is listening on port: ${environment.port}`)
})
