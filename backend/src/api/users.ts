import { Router } from 'express'

import * as User from '../db/User'

const routes = Router()

routes.get('/users/:id', async (req, res) => {
  const user = await User.find(req.params.id)

  if (user) {
    return res.json(user)
  } else {
    return res.status(404).json({ message: 'not found' })
  }
})

export default routes
