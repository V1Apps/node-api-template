export function getEnv(key: string): string {
  if (process.env[key]) {
    return process.env[key]
  }

  throw new Error(`process.env.${key} not defined.`)
}
