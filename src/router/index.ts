/* eslint-disable @typescript-eslint/no-var-requires */

import express from 'express'

import assignUserMiddleware from '../middleware/assignUser'
import authorizeUserMiddleware from '../middleware/authorizeUser'

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
  const handlers = [wrapAsync(assignUserMiddleware)]

  if (!route.isPublic) {
    handlers.push(wrapAsync(authorizeUserMiddleware))
  }

  handlers.push(wrapAsync(route.handler))

  switch (route.method) {
    case 'PATCH':
      router.patch(route.path, handlers)
      break
    case 'POST':
      router.post(route.path, handlers)
      break
    case 'PUT':
      router.put(route.path, handlers)
      break
    case 'DELETE':
      router.delete(route.path, handlers)
      break
    default:
      router.get(route.path, handlers)
      break
  }
}

export default router
