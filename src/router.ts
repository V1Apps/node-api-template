import express from 'express'
import AppError from './errors/appError'
import ErrorTypes from './errors/errorTypes'

import indexRoute from './controllers/users/index'

const routes: Route[] = [
  {
    path: "/",
    handler: indexRoute
  }
]

type MethodType = "GET" | "POST" | "PATCH" | "PUT" | "DELETE"

class Route {
  method?: MethodType
  path: string
  handler: express.RequestHandler

  constructor(method: MethodType, path: string, handler: express.RequestHandler) {
    this.method = method
    this.path = path
    this.handler = handler
  }
}

function wrapAsync(handler: Function) {
  return function (request: express.Request, response: express.Response, next: express.NextFunction) {
    handler(request, response, next).catch(next);
  };
}

const router = express.Router()

for (const route of routes) {
  switch (route.method) {
    case "PATCH":
      router.patch(route.path, wrapAsync(route.handler))
      break;
    case "POST":
      router.post(route.path, wrapAsync(route.handler))
      break;
    case "PUT":
      router.put(route.path, wrapAsync(route.handler))
      break;
    case "DELETE":
      router.delete(route.path, wrapAsync(route.handler))
      break;
    default:
      router.get(route.path, wrapAsync(route.handler))
      break;
  }
}

export default router
