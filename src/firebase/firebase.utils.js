import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-nYdZZJd5_jjuxx0oMIXlYEANm7KVYzA",
    authDomain: "crwn-db-326cb.firebaseapp.com",
    projectId: "crwn-db-326cb",
    storageBucket: "crwn-db-326cb.appspot.com",
    messagingSenderId: "43780921111",
    appId: "1:43780921111:web:c7e4f5d48c9549fc770952"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;