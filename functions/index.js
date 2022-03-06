const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp()

exports.makeAdmin = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then((user)=>{
        console.log(user)
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        }).then(result=>{
            console.log(result)
        }).catch(error=>{console.log(error)})
    })
})