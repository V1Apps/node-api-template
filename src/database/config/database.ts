import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';
import { getEnv } from '../../utils';

const db = new Sequelize({
    host: getEnv('DB_HOST', 'localhost'),
    database: getEnv('DB_DATABASE', 'database'),
    dialect: 'postgres',
    username: getEnv('DB_DATABASE', 'root'),
    password: getEnv('DB_PASSWORD', ''),
    port: parseInt(getEnv('DB_PORT', '5432')),
    models: [join(__dirname, '..', '..', 'database', 'models')],
});

export default db;