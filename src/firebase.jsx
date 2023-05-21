// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmzSIB_kvFKawvfBaWpOY1Ky0PDzn68Sc",
  authDomain: "pghelp-df771.firebaseapp.com",
  projectId: "pghelp-df771",
  storageBucket: "pghelp-df771.appspot.com",
  messagingSenderId: "668692558469",
  appId: "1:668692558469:web:e89481b317a8aabfd0efec",
  measurementId: "G-M9RDTRR1CX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
