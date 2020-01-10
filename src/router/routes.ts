import Route from './route'

import login from '../controllers/authentication/login'

import getUsers from '../controllers/users/index'
import me from '../controllers/users/me'

const routes: Route[] = [
  {
    path: '/',
    handler: getUsers,
  },
  {
    path: '/me',
    handler: me,
  },
  {
    method: 'POST',
    path: '/login',
    isPublic: true,
    handler: login,
  },
]

export default routes
