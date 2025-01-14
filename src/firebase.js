import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; // Correct import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRL3zYqAKb20ACqOy10peP751doomFVso",
  authDomain: "protfoliorahul.firebaseapp.com",
  projectId: "protfoliorahul",
  storageBucket: "protfoliorahul.firebasestorage.app",
  messagingSenderId: "202131921764",
  appId: "1:202131921764:web:2a14cc58d9b2eba93b3871",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporting the required Firebase functions
export { db, collection, addDoc, getDocs };
