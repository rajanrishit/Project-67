import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB780TW8R9FPWT61DfvpfB4-gzJ2gHziWo",
    authDomain: "project-67-26ddc.firebaseapp.com",
    databaseURL: "https://project-67-26ddc-default-rtdb.firebaseio.com",
    projectId: "project-67-26ddc",
    storageBucket: "project-67-26ddc.appspot.com",
    messagingSenderId: "285941042935",
    appId: "1:285941042935:web:b4c75f2f3a5422945a0df2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();