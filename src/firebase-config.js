// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyApCWF3FUtNj3SJVJIi4Bw-KTovG_fsRgI",
    authDomain: "spicy-soups.firebaseapp.com",
    databaseURL: "https://spicy-soups-default-rtdb.firebaseio.com",
    projectId: "spicy-soups",
    storageBucket: "spicy-soups.appspot.com",
    messagingSenderId: "97262051451",
    appId: "1:97262051451:web:6aa47e725ef94bda5202de",
    measurementId: "G-5J98BBBNNN"
};

export default firebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)