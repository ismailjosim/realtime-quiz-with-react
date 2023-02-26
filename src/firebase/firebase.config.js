// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDm_wqLsHjyocz39_JUPm9qS1LCorxdqY",
    authDomain: "quizcoderapp.firebaseapp.com",
    databaseURL: "https://quizcoderapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quizcoderapp",
    storageBucket: "quizcoderapp.appspot.com",
    messagingSenderId: "493862755686",
    appId: "1:493862755686:web:7589dd35c71361ad5a7ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
