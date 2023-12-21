// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKaDpmwpSDaHO4ClbiQAnrKDVN1fK6nWs",
  authDomain: "task-management-platform-371aa.firebaseapp.com",
  projectId: "task-management-platform-371aa",
  storageBucket: "task-management-platform-371aa.appspot.com",
  messagingSenderId: "962307212448",
  appId: "1:962307212448:web:4d0faceddba99e3c5a75c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);  
export default auth;
