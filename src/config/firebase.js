import  firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBN-e2rF2UNURfcxd3EDKZya91pMyhYEcM",
    authDomain: "auth-db-app.firebaseapp.com",
    databaseURL: "https://auth-db-app-default-rtdb.firebaseio.com",
    projectId: "auth-db-app",
    storageBucket: "auth-db-app.appspot.com",
    messagingSenderId: "5142697925",
    appId: "1:5142697925:web:6458a41ad2ee5ce6771dac"
  };

  console.log(firebase.auth)

  firebase.initializeApp(firebaseConfig);
  
    export { firebase as default } 