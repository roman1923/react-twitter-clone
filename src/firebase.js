/* import firebase from "firebase";    --- that's old v-  */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPgiph8g4fiU3c9bRb2nyMD4atl15l08U",
    authDomain: "twitter-clone-84f62.firebaseapp.com",
    projectId: "twitter-clone-84f62",
    storageBucket: "twitter-clone-84f62.appspot.com",
    messagingSenderId: "432928652048",
    appId: "1:432928652048:web:7b36a64899380193bf4395",
    measurementId: "G-MTXCT4W6KP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;