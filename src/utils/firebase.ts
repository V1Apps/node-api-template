import firebase from 'firebase'
import AppError from '../errors/appError'
import ErrorTypes from '../errors/errorTypes'
import { getEnv } from '../utils'
import { User } from '../models'

export default class FirebaseUtils {
  static instance: FirebaseUtils

  static get(): FirebaseUtils {
    if (!this.instance) {
      this.instance = new FirebaseUtils()
    }

    return this.instance
  }

  constructor() {
    firebase.initializeApp({
      apiKey: getEnv('FIREBASE_API_KEY'),
      authDomain: getEnv('FIREBASE_AUTH_DOMAIN'),
    })
  }

  async signInWithEmailAndPassword(email: string, password: string): Promise<User> {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
    const user = await User.findOne({ where: { firebaseId: userCredential.user.uid } })

    if (!user) {
      throw new AppError(ErrorTypes.UNAUTHORIZED, {
        message: 'Firebase Auth worked but user was not found.',
      })
    }

    return user
  }
}
