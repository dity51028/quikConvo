// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL7Qlzc6KCfC8NM_0HPlMInBSKgRPAPZE",
  authDomain: "quickconvo-e8bf6.firebaseapp.com",
  projectId: "quickconvo-e8bf6",
  storageBucket: "quickconvo-e8bf6.appspot.com",
  messagingSenderId: "443445333819",
  appId: "1:443445333819:web:74262f0bcb431e3adeb11e",
  measurementId: "G-B783X8MW2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()