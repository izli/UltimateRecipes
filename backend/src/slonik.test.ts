import pool from './slonik'
import { sql } from 'slonik'

describe('slonik', () => {
  test('connection to database', async () => {
    const result = await pool.one<{ test: number }>(sql`SELECT 1 as test`)
    expect(result.test).toEqual(1)
  })
})
