import * as dotenv from 'dotenv'

dotenv.config()

interface Environment {
  databaseUrl: string
  port: number
}

const environment: Environment = {
  databaseUrl: requireEnv('DATABASE_URL'),
  port: parseInt(process.env.PORT || '3000')
}

function requireEnv(key: string): string {
  const env = process.env[key]

  if (env) {
    return env
  } else {
    throw new Error(`Environment variable ${key} not configured`)
  }
}

export default environment
