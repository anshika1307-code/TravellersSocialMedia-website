import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAjOkZGkk_0LIVcnHWhfPVhAcAoia8EJus",
  authDomain: "travelsocialmedia-397fe.firebaseapp.com",
  projectId: "travelsocialmedia-397fe",
  storageBucket: "travelsocialmedia-397fe.appspot.com",
  messagingSenderId: "69495553207",
  appId: "1:69495553207:web:16287e027388d582386132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export default app