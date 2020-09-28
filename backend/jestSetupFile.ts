import pool from './src/slonik'
import { server } from './src/server'

afterAll(async () => {
  await pool.end()
  server.close()
})
