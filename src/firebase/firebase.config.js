// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "dotenv/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: "skill-sprinter-pro.firebaseapp.com",
  projectId: "skill-sprinter-pro",
  storageBucket: "skill-sprinter-pro.appspot.com",
  messagingSenderId: "349902822769",
  appId: "1:349902822769:web:db2561736fbfefe134ead0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
