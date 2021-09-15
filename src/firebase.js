// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqSEHc46NHsdFR5FLL4ndh67SMGrdzcw8",
  authDomain: "ecommerce-433b3.firebaseapp.com",
  projectId: "ecommerce-433b3",
  storageBucket: "ecommerce-433b3.appspot.com",
  messagingSenderId: "637038190551",
  appId: "1:637038190551:web:844f3a442cb26eba2bb592",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
