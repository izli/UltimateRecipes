import { sql } from 'slonik'
import pool from '../slonik'

export interface UnitBeforeSaving {
  unit_name: string
  abbreviation: string
}

export interface Unit extends UnitBeforeSaving {
  id: string
}

export async function insert(unit: UnitBeforeSaving): Promise<string> {
  return pool.oneFirst(sql`
    INSERT INTO
      units(unit_name, abbreviation)
    VALUES
      (${unit.unit_name}, ${unit.abbreviation})
    RETURNING id
  `) as Promise<string>
}

export async function find(id: string): Promise<Unit | null> {
  return pool.maybeOne<Unit>(sql`
    SELECT *
    FROM units
    WHERE
      id = ${id}
  `)
}

export async function select(): Promise<Unit[]> {
  return pool.any<Unit>(sql`
    SELECT *
    FROM units
  `)
}
