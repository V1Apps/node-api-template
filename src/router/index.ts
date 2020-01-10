import express from 'express'

import authenticationMiddleware from '../middleware/authentication'

import routes from './routes'

function wrapAsync(handler: Function) {
  return async function(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    if (handler) {
      handler(request, response, next).catch(next)
    }
  }
}

const router = express.Router()

for (const route of routes) {
  if (!route.isPublic) {
    router.use(authenticationMiddleware)
  }

  switch (route.method) {
    case 'PATCH':
      router.patch(route.path, wrapAsync(route.handler))
      break
    case 'POST':
      router.post(route.path, wrapAsync(route.handler))
      break
    case 'PUT':
      router.put(route.path, wrapAsync(route.handler))
      break
    case 'DELETE':
      router.delete(route.path, wrapAsync(route.handler))
      break
    default:
      router.get(route.path, wrapAsync(route.handler))
      break
  }
}

export default router
