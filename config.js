import * as firebase from 'firebase'
 require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDxN4JQlV45cf6mYavcDzGmq8n1z3hofL8",
    authDomain: "wily-a558f.firebaseapp.com",
    databaseURL: "https://wily-a558f.firebaseio.com",
    projectId: "wily-a558f",
    storageBucket: "wily-a558f.appspot.com",
    messagingSenderId: "546320567339",
    appId: "1:546320567339:web:4d83f83c46f2c239596e6e",
    measurementId: "G-H66ZBDMFYY"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig); 
   export default firebase.firestore();