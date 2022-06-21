// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN_-y8A1rGb8j8TNcXituRDOZ_YcRmrvw",
  authDomain: "water-app-77aab.firebaseapp.com",
  databaseURL: "https://water-app-77aab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "water-app-77aab",
  storageBucket: "water-app-77aab.appspot.com",
  messagingSenderId: "494677911455",
  appId: "1:494677911455:web:dd2d4311e6e2fbed9b7faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)