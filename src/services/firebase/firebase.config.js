import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASEAUTHDOMAIN,
  //   projectId: process.env.FIREBASEPROJECTID,
  //   storageBucket: process.env.FIREBASESTORAGEBUCKET,
  //   messagingSenderId: process.env.FIREBASEMESSAGINGSENDERID,
  //   appId: process.env.FIREBASEAPPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
