// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey: "AIzaSyAoltdKiKqG1EihdX07kQVgr68O0QdTYh4",
  authDomain: "fir-17fbb.firebaseapp.com",
  projectId: "fir-17fbb",
  storageBucket: "fir-17fbb.appspot.com",
  messagingSenderId: "794160510692",
  appId: "1:794160510692:web:0c94511bed3389d2125ef1",
  measurementId: "G-7V8EEDKR4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);