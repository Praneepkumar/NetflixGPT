// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_API_KEY } from "./constants";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "netfilxgpt-efca2.firebaseapp.com",
  projectId: "netfilxgpt-efca2",
  storageBucket: "netfilxgpt-efca2.appspot.com",
  messagingSenderId: "1059249681859",
  appId: "1:1059249681859:web:64607e202a0aaedbf6f976",
  measurementId: "G-7QP3QGNX8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
