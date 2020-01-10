import express from 'express'
import router from './router'
import errorHandler from './errors/errorHandler'
import './database'

const application = express()

application.use(router)
application.use(errorHandler)

export default application
