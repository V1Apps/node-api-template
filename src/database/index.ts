import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';
import * as config from './config';

let env: 'production' | 'development' = 'development'

if (process.env.NODE_ENV === 'production') {
    env = 'production'
}

const { url, dialect } = config[env];

const options: any = {
    dialect: dialect,
    models: [join(__dirname, '..', 'models')],
}

export default new Sequelize(url, options);