import { RequestHandler } from 'express'

type MethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export default class Route {
  method?: MethodType
  path: string
  isPublic?: boolean = false
  handler: RequestHandler

  constructor(method: MethodType, path: string, handler: RequestHandler) {
    this.method = method
    this.path = path
    this.handler = handler
  }
}
