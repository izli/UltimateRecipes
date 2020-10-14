import request from 'supertest'
import { app } from '../server'

import * as Unit from '../db/Unit'

describe('units API', () => {
  test('returning unit', async () => {
    const unitId = await Unit.insert({ unit_name: 'gramma', abbreviation: 'g' })

    const response = await request(app).get(`/units/${unitId}`)
    expect(response.status).toEqual(200)
    expect(response.body.unit_name).toEqual('gramma')
  })
})
