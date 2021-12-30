import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjqbwlH3oBzcj7ZMzLXND67UPhqCe5GYQ",
  authDomain: "disney-cne-a6f7a.firebaseapp.com",
  projectId: "disney-cne-a6f7a",
  storageBucket: "disney-cne-a6f7a.appspot.com",
  messagingSenderId: "784846812098",
  appId: "1:784846812098:web:d33e03c7bf67c18cc99c5b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
