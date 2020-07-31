import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBOysK1tZbkQ4uE0Qvr6cADkZvrr_key94",
    authDomain: "project-firebase-al.firebaseapp.com",
    databaseURL: "https://project-firebase-al.firebaseio.com",
    projectId: "project-firebase-al",
    storageBucket: "project-firebase-al.appspot.com",
    messagingSenderId: "651658659088",
    appId: "1:651658659088:web:4f2bd884b7466166075195"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);

  export default fire;