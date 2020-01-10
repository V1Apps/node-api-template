import Route from './route'

import indexRoute from '../controllers/users/index'

const routes: Route[] = [
  {
    path: '/',
    isPublic: false,
    handler: indexRoute,
  },
]

export default routes
