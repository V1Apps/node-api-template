import { ErrorType } from './errorTypes'
export { default as ErrorTypes } from './errorTypes'

class AppError extends Error {
  code: number | string
  httpStatusCode: number

  constructor(
    errorType: ErrorType,
    {
      code,
      message,
      httpStatusCode,
    }: { code?: string | number; message?: string; httpStatusCode?: number } = {}
  ) {
    super(message || errorType.defaultMessage)
    this.code = code || errorType.code
    this.httpStatusCode = httpStatusCode || errorType.defaultHttpStatusCode
  }
}

export default AppError
