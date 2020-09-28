import pool from './src/slonik'

afterAll(async () => {
  await pool.end()
})
