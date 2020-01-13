import Route from './route'

import me from '../controllers/users/me'

const routes: Route[] = [
  {
    path: '/me',
    handler: me,
  },
]

export default routes
