import { NextFunction, Response } from 'express'
import FirebaseAuth from '../utils/firebase'

const firebase = new FirebaseAuth()

export default function(request: any, response: Response, next: NextFunction): void {
  request.user = firebase.currentUser()
  next()
}
