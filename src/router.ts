import express from 'express'
import AppError from './errors/appError'
import ErrorTypes from './errors/errorTypes'

import indexRoute from './controllers/users/index'
import authMiddleware from './auth/auth-middleware'

const routes: Route[] = [
  {
    path: "/",
    handler: indexRoute
  },
  {
    path: "/auth",
    handler: indexRoute,
    auth: true
  }
]

type MethodType = "GET" | "POST" | "PATCH" | "PUT" | "DELETE"

class Route {
  method?: MethodType
  path: string
  auth?: boolean = false
  handler: express.RequestHandler

  constructor(method: MethodType, path: string, handler: express.RequestHandler) {
    this.method = method
    this.path = path
    this.handler = handler
  }
}

function wrapAsync(handler: CallableFunction) {
  return async function (request: express.Request, response: express.Response, next: express.NextFunction) {
    if (handler) {
      handler(request, response, next).catch(next);
    }
  };
}

const router = express.Router()
for (const route of routes) {
  switch (route.method) {
    case "PATCH":
      router.patch(route.path, [authMiddleware(route), wrapAsync(route.handler)])
      break;
    case "POST":
      router.post(route.path, [authMiddleware(route), wrapAsync(route.handler)])
      break;
    case "PUT":
      router.put(route.path, [authMiddleware(route), wrapAsync(route.handler)])
      break;
    case "DELETE":
      router.delete(route.path, [authMiddleware(route), wrapAsync(route.handler)])
      break;
    default:
      router.get(route.path, [authMiddleware(route), wrapAsync(route.handler)])
      break;
  }
}

export default router
