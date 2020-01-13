import Route from './route'

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
]

export default routes
