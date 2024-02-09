// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYmE_z9UYIQVraMH_bFCfnAFhBttMMBMY",
  authDomain: "vikings-f2232.firebaseapp.com",
  projectId: "vikings-f2232",
  storageBucket: "vikings-f2232.appspot.com",
  messagingSenderId: "755939011548",
  appId: "1:755939011548:web:9f581d4b22f30d496bbd19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { db, auth, storage };