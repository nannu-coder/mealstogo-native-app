import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASEAUTHDOMAIN,
  //   projectId: process.env.FIREBASEPROJECTID,
  //   storageBucket: process.env.FIREBASESTORAGEBUCKET,
  //   messagingSenderId: process.env.FIREBASEMESSAGINGSENDERID,
  //   appId: process.env.FIREBASEAPPID,
  apiKey: "AIzaSyA_6s0xDaHij5MxrCQHDIkFyNTgBTpkX_k",
  authDomain: "mealstogo-638a8.firebaseapp.com",
  projectId: "mealstogo-638a8",
  storageBucket: "mealstogo-638a8.appspot.com",
  messagingSenderId: "836608250422",
  appId: "1:836608250422:web:f2a36d20198f6b0c96be97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
