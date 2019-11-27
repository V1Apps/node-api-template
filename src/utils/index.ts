export function getEnv(key: string, default_value: string = "") {
    return process.env[key] || default_value
}