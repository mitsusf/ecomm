import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyBlh-yIaF5YB473WhSXZ13CW0ky5Y7Z4lM",
  authDomain: "ecomm-d95f2.firebaseapp.com",
  databaseURL: "https://ecomm-d95f2.firebaseio.com",
  projectId: "ecomm-d95f2",
  storageBucket: "ecomm-d95f2.appspot.com",
  messagingSenderId: "215760520295",
  appId: "1:215760520295:web:4d53af44886abfb429c0c2",
  measurementId: "G-XR2347XXF5"


});

const auth = firebase.auth();

export {auth};