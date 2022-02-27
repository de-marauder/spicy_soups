// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from 'firebase/database'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// const db = getDatabase(app)
// export const Products = onValue(ref(db, 'Products/'), (snapshot)=>{
//     console.log(snapshot.val())
//     return snapshot.val()
// })

// const analytics = getAnalytics(app);