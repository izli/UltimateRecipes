import * as dotenv from 'dotenv'

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

function configFile() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return '.env'
    case 'test':
      return '.env.example'
    default:
      throw new Error('Unknown NODE_ENV')
  }
}

dotenv.config({ path: configFile() })

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
