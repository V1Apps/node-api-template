export interface ErrorType {
  code: number
  defaultMessage: string
  defaultHttpStatusCode: number
}

const ErrorTypes = {
  GENERIC: {
    code: 2000,
    defaultMessage: 'Something unexpected happened.',
    defaultHttpStatusCode: 500,
  },
  OBJECT_NOT_FOUND: {
    code: 2001,
    defaultMessage: 'Object not found.',
    defaultHttpStatusCode: 404,
  },
}

export default ErrorTypes
