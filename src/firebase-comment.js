import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRL3zYqAKb20ACqOy10peP751doomFVso",
  authDomain: "protfoliorahul.firebaseapp.com",
  projectId: "protfoliorahul",
  storageBucket: "protfoliorahul.firebasestorage.app",
  messagingSenderId: "202131921764",
  appId: "1:202131921764:web:2a14cc58d9b2eba93b3871",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };