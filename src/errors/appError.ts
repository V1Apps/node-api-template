import { ErrorType } from './errorTypes'

class AppError extends Error {
  code: number
  httpStatusCode: number

  constructor(
    errorType: ErrorType,
    {
      message,
      httpStatusCode,
    }: { message?: string; httpStatusCode?: number } = {}
  ) {
    console.log(errorType.code)
    super(message || errorType.defaultMessage)
    this.code = errorType.code
    this.httpStatusCode = httpStatusCode || errorType.defaultHttpStatusCode
  }
}

export default AppError
