import * as firebase from 'firebase';
import firebaseConfig from './config';

class User {
    displayName?: string;
    photoURL?: string;
    email?: string;
    password?: string;
}

export class FirebaseAuth {

    constructor() {
        firebase.initializeApp(firebaseConfig);
    }

    currentUser() {
        return firebase.auth().currentUser
    }

    createUser(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

}