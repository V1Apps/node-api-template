import firebase, { auth } from 'firebase'

import { getEnv } from '../utils'

export default class FirebaseAuth {
  constructor() {
    firebase.initializeApp({
      apiKey: getEnv('FIREBASE_API_KEY'),
      authDomain: getEnv('FIREBASE_AUTH_DOMAIN'),
      projectId: getEnv('FIREBASE_PROJECT_ID'),
    })
  }

  currentUser(): firebase.User {
    return auth().currentUser
  }

  createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return auth().createUserWithEmailAndPassword(email, password)
  }

  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return auth().signInWithEmailAndPassword(email, password)
  }
}
