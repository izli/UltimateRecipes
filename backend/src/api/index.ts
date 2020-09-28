import { Router } from 'express'

const routes = Router()
routes.get('/_ping', (_req, res) => {
  res.sendStatus(200)
})

export default routes
