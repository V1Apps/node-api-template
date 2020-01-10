import { getEnv } from '../utils'
import firebase from 'firebase'
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
    return User.findOne({ where: { firebaseId: userCredential.user.uid } })
  }
}
