import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbJBnFV14srKzcQ4H7JyBtWR6j-Sby3CU",
    authDomain: "devlinksbn.firebaseapp.com",
    projectId: "devlinksbn",
    storageBucket: "devlinksbn.appspot.com",
    messagingSenderId: "363156469220",
    appId: "1:363156469220:web:210fcc1f9545fbf36a03f1",
    measurementId: "G-1146JP8339"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };