// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

var REACT_APP_API_KEY = "AIzaSyApCWF3FUtNj3SJVJIi4Bw-KTovG_fsRgI"
var REACT_APP_AUTH_DOMAIN = "spicy-soups.firebaseapp.com"
var REACT_APP_DATABASE_URL = "https://spicy-soups-default-rtdb.firebaseio.com"
var REACT_APP_PROJECT_ID = "spicy-soups"
var REACT_APP_STORAGE_BUCKET = "spicy-soups.appspot.com"
var REACT_APP_MESSAGING_SENDER_ID = "97262051451"
var REACT_APP_APP_ID = "1:97262051451:web:6aa47e725ef94bda5202de"
var REACT_APP_MEASUREMENT_ID = "G-5J98BBBNNN"

// REACT_APP_SERVER_URL = "https://spicy-soups.herokuapp.com/api/payment"

const firebaseConfig = {
    apiKey:  REACT_APP_API_KEY,
    authDomain:  REACT_APP_AUTH_DOMAIN,
    databaseURL:  REACT_APP_DATABASE_URL,
    projectId:  REACT_APP_PROJECT_ID,
    storageBucket:  REACT_APP_STORAGE_BUCKET,
    messagingSenderId:  REACT_APP_MESSAGING_SENDER_ID,
    appId:  REACT_APP_APP_ID,
    measurementId:  REACT_APP_MEASUREMENT_ID
}

export default firebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)