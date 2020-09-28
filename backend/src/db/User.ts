import { sql } from 'slonik'
import pool from '../slonik'

export interface UserBeforeSaving {
  name: string
}

export interface User extends UserBeforeSaving {
  id: string
}

export async function insert(user: UserBeforeSaving): Promise<string> {
  return pool.oneFirst(sql`
    INSERT INTO
      users(name)
    VALUES
      (${user.name})
    RETURNING id
  `) as Promise<string>
}

export async function find(id: string): Promise<User> {
  return pool.maybeOne<User>(sql`
    SELECT *
    FROM users
    WHERE
      id = ${id}
  `)
}
