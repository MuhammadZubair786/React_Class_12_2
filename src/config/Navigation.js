import  firebase from 'firebase/compat/app';
import 'firebase/compat/database';

    const firebaseConfig = {
        apiKey: "AIzaSyD3vUr2dqgSyR4vGU-fDwF-vTzxh6J0Wuk",
        authDomain: "first-project-91370.firebaseapp.com",
        databaseURL: "https://first-project-91370-default-rtdb.firebaseio.com",
        projectId: "first-project-91370",
        storageBucket: "first-project-91370.appspot.com",
        messagingSenderId: "629838050079",
        appId: "1:629838050079:web:536c33a7ad35b22ec1362a"
      };
 

console.log(firebase.database)

firebase.initializeApp(firebaseConfig);

  export { firebase as default } 