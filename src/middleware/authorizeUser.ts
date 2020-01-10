import { Response, NextFunction } from 'express'
import AppError from '../errors/appError'
import ErrorTypes from '../errors/errorTypes'

import { BaseRequest } from '../types'

export default async (request: BaseRequest, _: Response, next: NextFunction): Promise<void> => {
  if (!request.currentUser) {
    throw new AppError(ErrorTypes.UNAUTHORIZED, { message: 'You must be signed in to do this.' })
  }

  next()
}
