import { Sequelize } from 'sequelize-typescript';
import { getEnv } from '../utils';
import { join } from 'path';

const db = new Sequelize({
    host: getEnv('DB_HOST', 'localhost'),
    database: getEnv('DB_DATABASE', 'database'),
    dialect: 'postgres',
    username: getEnv('DB_DATABASE', 'root'),
    password: getEnv('DB_PASSWORD', ''),
    port: parseInt(getEnv('DB_PORT', '3306')),
    models: [join(__dirname, '..', '..', 'database', 'models')],
});

export default db;