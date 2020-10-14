import { Router } from 'express'

import * as Unit from '../db/Unit'

const routes = Router()

routes.get('/units/:id', async (req, res) => {
  const unit = await Unit.find(req.params.id)

  if (unit) {
    return res.json(unit)
  } else {
    return res.status(404).json({ message: 'not found' })
  }
})

routes.get('/units', async (req, res) => {
  const units = await Unit.select()
  if (units) {
    return res.json(units)
  } else {
    return res.status(404).json({ message: 'not found' })
  }
})

routes.post('/units/', async (req, res) => {
  const unit = await Unit.insert(req.body)
  if (unit) {
    return res.json(unit)
  } else {
    return res.status(404).json({ message: "couldn't add unit" })
  }
})

export default routes
