import { Sequelize } from 'sequelize-typescript'
import fs from 'fs'
import { join } from 'path'
import config from './config'

let env: 'production' | 'development' = 'development'

if (process.env.NODE_ENV === 'production') {
  env = 'production'
}

const { url, dialect } = config[env]

const modelPaths: string[] = []
const modelsDirectoryPath = join(__dirname, '..', 'models')

const paths = fs.readdirSync(modelsDirectoryPath)

for (const path of paths) {
  if (path.includes('.model')) {
    modelPaths.push(`${modelsDirectoryPath}/${path}`)
    console.log(modelPaths)
  }
}

const options: any = {
  dialect: dialect,
  models: modelPaths,
}

export default new Sequelize(url, options)
