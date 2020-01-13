import firebase from 'firebase'
import path from 'path'
import { getEnv } from '../utils'
import admin from 'firebase-admin'
export default class Firebase {
  static instance: Firebase

  static get(): Firebase {
    if (!this.instance) {
      this.instance = new Firebase()
    }

    return this.instance
  }

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(path.join(__dirname, '..', '..', 'foobar.json')),
      databaseURL: 'https://sifted-development.firebaseio.com',
    })

    firebase.initializeApp({
      apiKey: getEnv('FIREBASE_API_KEY'),
      authDomain: getEnv('FIREBASE_AUTH_DOMAIN'),
    })
  }

  async decodeIdToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
    return admin.auth().verifyIdToken(idToken)
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
}

export class FirebaseUser {
  uid: string
  email: string
  displayName: string

  static async login(email: string, password: string): Promise<FirebaseUser> {
    const userCredential = await Firebase.get().signInWithEmailAndPassword(email, password)
    return new FirebaseUser(userCredential)
  }

  constructor(userCredential: firebase.auth.UserCredential) {
    this.uid = userCredential.user.uid
    this.email = userCredential.user.email
    this.displayName = userCredential.user.displayName
  }

  async generateCustomToken(claims?: Record<string, any>): Promise<string> {
    if (this.uid) return admin.auth().createCustomToken(this.uid, claims)
  }
}
