// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0A3DWg7qL9sVoQCN_yaz-lthwkiom1G8",
  authDomain: "hairhaven-de2d0.firebaseapp.com",
  projectId: "hairhaven-de2d0",
  storageBucket: "hairhaven-de2d0.appspot.com",
  messagingSenderId: "925636073560",
  appId: "1:925636073560:web:93385667296c2f5d4bd22d",
  measurementId: "G-8GFE7C2Q69"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export { db, app, auth };
// const analytics = getAnalytics(app);