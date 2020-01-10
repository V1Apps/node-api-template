import { Response, NextFunction } from 'express'
import AppError from '../errors/appError'
import ErrorTypes from '../errors/errorTypes'

import { AccessToken, User } from '../models'
import { BaseRequest } from '../types'

export default async (request: BaseRequest, _: Response, next: NextFunction): Promise<void> => {
  const token = request.header('authorization')

  if (token) {
    const accessToken = await AccessToken.findByPk(token)

    if (accessToken) {
      request.currentUser = await User.findByPk(accessToken.userId)
    } else {
      throw new AppError(ErrorTypes.UNAUTHORIZED, { message: 'Authorization token invalid.' })
    }
  }

  next()
}
