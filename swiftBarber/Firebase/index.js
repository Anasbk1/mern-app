// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAGzqkhaCsDf3QU7mX1k4IKpXrsaamHAHE",
    authDomain: "barbar-shop-258f2.firebaseapp.com",
    projectId: "barbar-shop-258f2",
    storageBucket: "barbar-shop-258f2.appspot.com",
    messagingSenderId: "95439583234",
    appId: "1:95439583234:web:fb27c3619c2ceb487d4f1b",
    measurementId: "G-B2BHTNX3WG",
    appName: "barbar-shop-258f2"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FIREBASE_AUTH = getAuth(app)
export const FIREBASE_DB = getFirestore(app)