// import firebase from 'firebase'; 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoVfKAmRzo5pzRqAIIwDaEf8SsCQS4Lgc",
    authDomain: "shopx-e3796.firebaseapp.com",
    projectId: "shopx-e3796",
    storageBucket: "shopx-e3796.appspot.com",
    messagingSenderId: "208680374917",
    appId: "1:208680374917:web:cb83566a4753dccf654fec",
    measurementId: "G-HTLHPH104W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db,auth};