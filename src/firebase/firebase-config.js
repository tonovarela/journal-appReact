import firebase from  'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD5WPScpXkIwtgUSy9X27E2_sAsGv-CibQ",
    authDomain: "react-app-cursos-afbaa.firebaseapp.com",
    projectId: "react-app-cursos-afbaa",
    storageBucket: "react-app-cursos-afbaa.appspot.com",
    messagingSenderId: "557779006852",
    appId: "1:557779006852:web:29d3ac6afae3775aea19d1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore;
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }


