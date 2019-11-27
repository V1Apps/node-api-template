import dotenv from "dotenv";
dotenv.config();

const host = getEnv('DB_HOST', 'localhost');
const database = getEnv('DB_DATABASE', 'node-api');
const dialect = 'postgres';
const username = getEnv('DB_DATABASE', 'root');
const password = getEnv('DB_PASSWORD', '');
const port = parseInt(getEnv('DB_PORT', '5432'));


module.exports = {
    development: {
        url: `${dialect}://${username}@${host}:${port}/${database}`,
        password: password,
        dialect: dialect,
        operatorsAliases: false,
    },
    production: {
        url: `${dialect}://${username}@${host}:${port}/${database}`,
        dialect: dialect,
        password: password,
        operatorsAliases: false,
    },
};

function getEnv(key, default_value) {
    return process.env[key] || default_value;
}