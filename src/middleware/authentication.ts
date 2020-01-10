import { Response, NextFunction } from 'express'
import FirebaseAuth from '../utils/firebase'
import { BaseRequest } from '../types'

const firebase = new FirebaseAuth()

export default function(request: BaseRequest, _: Response, next: NextFunction): void {
  console.log(firebase.currentUser())
  request.currentUser = null
  next()
}
