import Firebase from '../utils/firebase'
import { Response, NextFunction } from 'express'
import { BaseRequest } from '../types'
import { User } from '../models'

import AppError, { ErrorTypes } from '../errors/appError'

export default async (request: BaseRequest, _: Response, next: NextFunction): Promise<void> => {
  const token = request.header('authorization')
  const decodedIdToken = await Firebase.get().decodeIdToken(token)
  const userId = decodedIdToken.user_id

  const user = await User.findByPk(userId)

  if (!user) {
    throw new AppError(ErrorTypes.UNAUTHORIZED, {
      message: 'Token was valid, but user associated with token was not found.',
    })
  }

  request.currentUser = user
  next()
}
