import { createPool } from 'slonik'
import environment from './environment'

const pool = createPool(environment.databaseUrl)
export default pool
