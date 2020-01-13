import firebase from 'firebase'
import admin from 'firebase-admin'

import { getEnv } from '.'

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: getEnv('FIREBASE_PROJECT_ID'),
    privateKey: getEnv('FIREBASE_PRIVATE_KEY'),
    clientEmail: getEnv('FIREBASE_CLIENT_EMAIL'),
  }),
})

firebase.initializeApp({
  apiKey: getEnv('FIREBASE_API_KEY'),
  authDomain: getEnv('FIREBASE_AUTH_DOMAIN'),
})
