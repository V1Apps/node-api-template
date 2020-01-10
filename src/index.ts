import dotenv from 'dotenv'
dotenv.config()

import application from './application'

const port = process.env.PORT || 3000

application.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})
