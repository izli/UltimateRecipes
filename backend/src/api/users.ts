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

routes.post('/users/login', async (req, res) => {
  const user = await User.findByName(req.body.name)
  if (user) {
    req.session!.userId = user.id
    return res.json(user)
  } else {
    return res.status(404).json({ message: "no such user, can't login" })
  }
})

export default routes
