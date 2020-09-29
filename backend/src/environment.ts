import * as dotenv from 'dotenv'

export enum NodeEnv {
  development = 'development',
  test = 'test'
}

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
  nodeEnv: NodeEnv
}

const environment: Environment = {
  databaseUrl: requireEnv('DATABASE_URL'),
  port: port(),
  nodeEnv: process.env.NODE_ENV as NodeEnv
}

function requireEnv(key: string): string {
  const env = process.env[key]

  if (env) {
    return env
  } else {
    throw new Error(`Environment variable ${key} not configured`)
  }
}

/**
 * Return different port in tests
 */
function port() {
  if (process.env.NODE_ENV === NodeEnv.test) {
    return 10000 + parseInt(process.env.JEST_WORKER_ID)
  } else {
    return parseInt(process.env.PORT || '3000')
  }
}

export default environment
