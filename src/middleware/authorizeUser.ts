import { Response, NextFunction } from 'express'
import AppError, { ErrorTypes } from '../errors/appError'

import { BaseRequest } from '../types'

export default async (request: BaseRequest, _: Response, next: NextFunction): Promise<void> => {
  if (!request.currentUser) {
    throw new AppError(ErrorTypes.UNAUTHORIZED, { message: 'You must be signed in to do this.' })
  }

  next()
}
