import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGfyOxicGWUJtYK0JAgibt31k444uasNo",
  authDomain: "tasty-bites-8f9b8.firebaseapp.com",
  projectId: "tasty-bites-8f9b8",
  storageBucket: "tasty-bites-8f9b8.firebasestorage.app",
  messagingSenderId: "166573331009",
  appId: "1:166573331009:web:39c6f1ca92be8096d96cc0",
  measurementId: "G-42VVFFEFJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
