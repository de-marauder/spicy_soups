// Import the functions you need from the SDKs you need


var admin = require("firebase-admin");

// var serviceAccount = require("./spicy-soups-firebase-adminsdk-h8uc0-bcb0057087.json");
// console.log('serviceAccount: ', serviceAccount)
// console.log('process.env.SERVER_KEY: ', JSON.parse(process.env.SERVER_KEY))
// admin.initializeApp({
// credential: applicationDefault(),
//   databaseURL: "https://spicy-soups-default-rtdb.firebaseio.com"
// });

admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
  credential: admin.credential.cert(JSON.parse(process.env.SERVER_KEY)),
  databaseURL: "https://spicy-soups-default-rtdb.firebaseio.com"
});

module.exports = admin


// const { initializeApp } = require("firebase/app");
// const {getDatabase} = require("firebase/database");


// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// }


// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)
// exports.default = getDatabase(app)