import express from 'express'

type MethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export default class Route {
  method?: MethodType
  path: string
  isPublic?: boolean = false
  handler: express.RequestHandler

  constructor(method: MethodType, path: string, handler: express.RequestHandler) {
    this.method = method
    this.path = path
    this.handler = handler
  }
}
