import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';
import * as config from './config';

const env = 'development';
const { url, dialect, password } = config[env];
const options: any = {
    dialect: dialect,
    password: password,
    models: [join(__dirname, '..', '..', 'database', 'models')],
}
export default new Sequelize(url, options);