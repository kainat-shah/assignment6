// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB8vUjHRtwhpXaiEfySG95M9HPLSEWRn8M",
  authDomain: "react-firebase-eeef9.firebaseapp.com",
  projectId: "react-firebase-eeef9",
  storageBucket: "react-firebase-eeef9.firebasestorage.app",
  messagingSenderId: "610949890129",
  appId: "1:610949890129:web:4e0ca4c5df0445eaa2b870",
  measurementId: "G-9HZ6F7TVH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider(); 
export const db = getFirestore(app);