import express from 'express'
import bodyParser from 'body-parser'
import './database'

import router from './router'
import errorHandler from './errors/errorHandler'

const application = express()

application.use(bodyParser.json())
application.use(router)
application.use(errorHandler)

export default application
