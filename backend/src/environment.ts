interface Environment {
  databaseUrl: string
}

const environment: Environment = {
  databaseUrl: requireEnv('DATABASE_URL')
}

export default environment

function requireEnv(key: string): string {
  const env = process.env[key]

  if (env) {
    return env
  } else {
    throw new Error('Environment variable ${env} not configured')
  }
}
