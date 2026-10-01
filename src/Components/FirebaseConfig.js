// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDePcVnPGcRAvzZLN3Jwfu9Wpf9AnpD2d0",
  authDomain: "tutorpoint-cc060.firebaseapp.com",
  projectId: "tutorpoint-cc060",
  storageBucket: "tutorpoint-cc060.firebasestorage.app",
  messagingSenderId: "712173453124",
  appId: "1:712173453124:web:d1877053a4f2a08f6e2111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(app)