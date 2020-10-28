// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAQhls-Mj-xKKAo4pPRsIdXSc-DoGaBdlU",
  authDomain: "instagram-clone-d55fe.firebaseapp.com",
  databaseURL: "https://instagram-clone-d55fe.firebaseio.com",
  projectId: "instagram-clone-d55fe",
  storageBucket: "instagram-clone-d55fe.appspot.com",
  messagingSenderId: "37324714811",
  appId: "1:37324714811:web:8ed7cbfccdaea16e9f7d1e",
  measurementId: "G-5V5VESN87V"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth , storage};
//export defalt db;
