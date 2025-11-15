// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKIHi7RUQqY_1C6rUaOhwhgQW5bSmA4FQ",
  authDomain: "vitalclin-b2e18.firebaseapp.com",
  projectId: "vitalclin-b2e18",
  storageBucket: "vitalclin-b2e18.appspot.com",
  messagingSenderId: "883471426086",
  appId: "1:883471426086:web:560d1d8d6fe321bc95bce7",
  measurementId: "G-9DDWQQ2KGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
