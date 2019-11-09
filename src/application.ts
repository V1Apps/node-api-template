import express from 'express';
import router from './router';
import errorHandler from './errors/errorHandler'

const application = express();

application.use(router);
application.use(errorHandler)

export default application;
