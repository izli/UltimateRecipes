import * as request from 'supertest'
import { app } from '../server'

import * as User from '../db/User'

describe('users API', () => {
  test('returning user', async () => {
    const userId = await User.insert({ name: 'Manny Calavera' })

    const response = await request(app).get(`/users/${userId}`)
    expect(response.status).toEqual(200)
  })
})
