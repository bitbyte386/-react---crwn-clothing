import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBmQtn1_9bILc0Xm9yYWQciSRKB-mOKQ7Q",
    authDomain: "crwn-db-880cc.firebaseapp.com",
    databaseURL: "https://crwn-db-880cc.firebaseio.com",
    projectId: "crwn-db-880cc",
    storageBucket: "",
    messagingSenderId: "995110489048",
    appId: "1:995110489048:web:483e3aeaa4928ae8"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore  = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

