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


export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth){
        console.log("userAuth: null");
        return;
    }
    console.log("userAuth:"+userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    console.log("snapshot:"+snapshot);
    console.log("snapshot.exists:"+snapshot.exists);
    if(!snapshot.exists){
      const {displayName,email} = userAuth;  
      const createdAt = new Date();
      console.log('displayName'+displayName+' email'+email+' createdAt'+createdAt);
      try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
      }catch(error){
            console.log('Error creating user', error.message);
      }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore  = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

