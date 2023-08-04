// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKPV9apCfBnUQHQGsG8YbPKDrRedLwVOc",
    authDomain: "react-curso-a8d2e.firebaseapp.com",
    projectId: "react-curso-a8d2e",
    storageBucket: "react-curso-a8d2e.appspot.com",
    messagingSenderId: "118749017143",
    appId: "1:118749017143:web:d3640b3d79c7f1eec6bbb2"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);