import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDayJRIIYfxB85PsIg7Z7NUphlP8pIeOyE",
    authDomain: "proyecto-final-coder-9c46a.firebaseapp.com",
    projectId: "proyecto-final-coder-9c46a",
    storageBucket: "proyecto-final-coder-9c46a.appspot.com",
    messagingSenderId: "858602748675",
    appId: "1:858602748675:web:d5bb881c7d78f8d8ee8736"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)