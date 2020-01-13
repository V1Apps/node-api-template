import admin from 'firebase-admin'
import { Response, NextFunction } from 'express'
import { BaseRequest } from '../types'
import { User } from '../models'

import AppError, { ErrorTypes } from '../errors/appError'

export default async (request: BaseRequest, _: Response, next: NextFunction): Promise<void> => {
  const token = request.header('authorization')

  if (!token) {
    next()
    return
  }

  const decodedIdToken = await admin.auth().verifyIdToken(token)
  const firebaseUserId = decodedIdToken.user_id

  const user = await User.findOne({ where: { firebaseId: firebaseUserId } })

  if (!user) {
    throw new AppError(ErrorTypes.UNAUTHORIZED, {
      message: 'Token was valid, but user associated with token was not found.',
    })
  }

  request.currentUser = user

  next()
}
