// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// const {getAuth} = require("firebase/auth");
const {getDatabase} = require("firebase/database");

// console.log(process.env.REACT_APP_API_KEY)

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY || "AIzaSyApCWF3FUtNj3SJVJIi4Bw-KTovG_fsRgI",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN || "spicy-soups.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL || "https://spicy-soups-default-rtdb.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID || "spicy-soups",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "spicy-soups.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "97262051451",
    appId: process.env.REACT_APP_APP_ID || "1:97262051451:web:6aa47e725ef94bda5202de",
    measurementId: process.env.REACT_APP_MEASUREMENT_ID || "G-5J98BBBNNN"
}

// export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)
exports.default = getDatabase(app)