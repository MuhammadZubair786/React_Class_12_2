import  firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
 };

console.log(firebase.database)

firebase.initializeApp(firebaseConfig);

  export { firebase as default } 


