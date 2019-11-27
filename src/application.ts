import express from 'express';
import router from './router';
import errorHandler from './errors/errorHandler';
import Database from './database/config/database';
declare let global:any;

const application = express();

global.db = Database;
application.use(router);
application.use(errorHandler)

export default application;
