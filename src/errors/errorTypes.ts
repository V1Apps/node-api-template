export interface ErrorType {
  code: number | string
  defaultMessage: string
  defaultHttpStatusCode: number
}

const ErrorTypes = {
  GENERIC: {
    code: 'generic',
    defaultMessage: 'Something unexpected happened.',
    defaultHttpStatusCode: 500,
  },
  UNAUTHORIZED: {
    code: 'unauthorized',
    defaultMessage: 'You do not have permission to do this.',
    defaultHttpStatusCode: 401,
  },
  OBJECT_NOT_FOUND: {
    code: 'not_found',
    defaultMessage: 'Object not found.',
    defaultHttpStatusCode: 404,
  },
}

export default ErrorTypes
