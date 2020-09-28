import * as dotenv from 'dotenv'

dotenv.config()

interface Environment {
  databaseUrl: string
}

const environment: Environment = {
  databaseUrl: requireEnv('DATABASE_URL')
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
