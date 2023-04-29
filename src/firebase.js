import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
    apiKey: "AIzaSyC5VtYTo4HVh0lAkaaH3MZuNcYRfz3c-r8",
    authDomain: "tancrudapp.firebaseapp.com",
    projectId: "tancrudapp",
    storageBucket: "tancrudapp.appspot.com",
    messagingSenderId: "398751430496",
    appId: "1:398751430496:web:80aa8cb0464b02dc521005"
  };
const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();