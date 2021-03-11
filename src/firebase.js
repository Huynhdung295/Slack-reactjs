import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD6V1xLlWwHlUrD04-S7pOfyguPghg433o",
    authDomain: "slack-huynhdung.firebaseapp.com",
    projectId: "slack-huynhdung",
    storageBucket: "slack-huynhdung.appspot.com",
    messagingSenderId: "638341913187",
    appId: "1:638341913187:web:0b379b89bc93d0b3ca3656"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db;



