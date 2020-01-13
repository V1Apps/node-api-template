import { Response } from 'express'

import AppError from '../../errors/appError'
import ErrorTypes from '../../errors/errorTypes'
import { BaseRequest } from '../../types'
import { FirebaseUser } from '../../utils/firebase'

export default async (request: BaseRequest, response: Response): Promise<void> => {
  const { email, password } = request.body
  try {
    const firebaseUser = await FirebaseUser.login(email, password)
    const customToken = await firebaseUser.generateCustomToken()
    response.json({ data: customToken })
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      throw new AppError(ErrorTypes.UNAUTHORIZED, {
        message: 'The password you provided is incorrect.',
      })
    } else if (error.code === 'auth/user-not-found') {
      throw new AppError(ErrorTypes.UNAUTHORIZED, {
        message: 'A user with this email does not exist.',
      })
    } else {
      throw error
    }
  }
}
