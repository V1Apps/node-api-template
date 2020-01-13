import express from 'express'
import AppError from './appError'

interface ErrorResponse {
  code: number | string
  message: string
  stackTrace?: string[]
}

const errorHandler = (
  error: AppError,
  _: express.Request,
  response: express.Response,
  next: express.NextFunction
): void => {
  const httpStatusCode = error.httpStatusCode ? error.httpStatusCode : 500
  const errorCode = error.code ? error.code : 2000

  const errorResponse: ErrorResponse = {
    code: errorCode,
    message: error.message,
  }

  if (process.env.NODE_ENV !== 'production') {
    const stack = error.stack
    if (stack) errorResponse.stackTrace = stack.split('\n')
  }

  if (!response.headersSent) {
    response.status(httpStatusCode).json({ error: errorResponse })
  }

  next(error)
}

export default errorHandler
