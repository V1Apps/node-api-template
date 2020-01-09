//import dotenv from "dotenv";
const dotenv = require('dotenv')
dotenv.config()

const host = getEnv('DB_HOST', 'localhost')
const database = getEnv('DB_DATABASE', 'node-api')
const dialect = 'postgres'
const username = getEnv('DB_USER', 'postgres')
const password = getEnv('DB_PASSWORD', '')
const port = parseInt(getEnv('DB_PORT', '5432'))

module.exports = {
  development: {
    url: `${dialect}://${username}@${host}:${port}/${database}`,
    password: password,
    dialect: dialect,
  },
  production: {
    url: `${dialect}://${username}@${host}:${port}/${database}`,
    dialect: dialect,
    password: password,
  },
}

function getEnv(key, default_value) {
  return process.env[key] || default_value
}
