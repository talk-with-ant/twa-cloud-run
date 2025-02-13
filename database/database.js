const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://antv2-xdbgna.firebaseio.com",
});

const db = admin.firestore();
const storage = admin.storage();

module.exports = { db, storage };
