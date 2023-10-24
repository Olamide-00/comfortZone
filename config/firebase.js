// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA21FOb-pgdXH_SLIApeAACDI9JDK6nqjk",
  authDomain: "comfortzone-6e92c.firebaseapp.com",
  projectId: "comfortzone-6e92c",
  storageBucket: "comfortzone-6e92c.appspot.com",
  messagingSenderId: "1060820840044",
  appId: "1:1060820840044:web:b9f6c9dedc6b1023ea7249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth firebase
export const auth = getAuth(app);