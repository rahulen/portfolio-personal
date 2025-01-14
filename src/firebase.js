import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; // Correct import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "protfoliorahul.firebaseapp.com",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporting the required Firebase functions
export { db, collection, addDoc, getDocs };
