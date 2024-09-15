// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBq6QiVFYIvOWQY559rXL4z-QVdAIT_FII",
    authDomain: "ecomine-282e8.firebaseapp.com",
    projectId: "ecomine-282e8",
    storageBucket: "ecomine-282e8.appspot.com",
    messagingSenderId: "93220679918",
    appId: "1:93220679918:web:a03962f1818f208cff43ff"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
