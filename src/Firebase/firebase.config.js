// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx64YPmj91dVPHHEFRVz6kycTF5pQ2FWs",
  authDomain: "dragonnews-55c7b.firebaseapp.com",
  projectId: "dragonnews-55c7b",
  storageBucket: "dragonnews-55c7b.firebasestorage.app",
  messagingSenderId: "791881198139",
  appId: "1:791881198139:web:8b30e650a123419a6c4a1e",
  measurementId: "G-RV3GP8WEJH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
