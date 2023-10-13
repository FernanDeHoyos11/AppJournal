// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6O6PyrQ3V2RIUbrmbjeHqkqYF02SfQ8s",
  authDomain: "appjournal-c4e26.firebaseapp.com",
  projectId: "appjournal-c4e26",
  storageBucket: "appjournal-c4e26.appspot.com",
  messagingSenderId: "1074339973559",
  appId: "1:1074339973559:web:ba2d82a4a1df7dd0dbc032",
  measurementId: "G-CQ9732E43X"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);