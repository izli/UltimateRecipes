import * as request from 'supertest'
import { app } from '../server'

describe('index API', () => {
  test('GET /_ping', async () => {
    const response = await request(app).get('/_ping')
    expect(response.status).toEqual(200)
  })
})
