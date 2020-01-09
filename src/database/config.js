const dotenv = require('dotenv')
dotenv.config()

const url = process.env['DATABASE_URL']
const dialect = 'postgres'

module.exports = {
  development: { url: url, dialect: dialect },
  production: { url: url, dialect: dialect },
}
