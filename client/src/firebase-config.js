// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

var REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
var REACT_APP_AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN
var REACT_APP_DATABASE_URL = process.env.REACT_APP_DATABASE_URL
var REACT_APP_PROJECT_ID = process.env.REACT_APP_PROJECT_ID
var REACT_APP_STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET
var REACT_APP_MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID
var REACT_APP_APP_ID = process.env.REACT_APP_APP_ID
var REACT_APP_MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID

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