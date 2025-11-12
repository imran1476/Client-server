// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ GoogleAuthProvider import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYpAJWVSsc5k52h3lA7W-sUqWQcSfrGkQ",
  authDomain: "utility-bill-correct.firebaseapp.com",
  projectId: "utility-bill-correct",
  storageBucket: "utility-bill-correct.firebasestorage.app",
  messagingSenderId: "135694271633",
  appId: "1:135694271633:web:ebba0839f5a26b8cb72b30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider ✅
export const googleProvider = new GoogleAuthProvider();
