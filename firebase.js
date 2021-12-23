import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2K4CNL9oLiWGcVio6-C6E15T0y_9s7PM",
    authDomain: "uber-51c15.firebaseapp.com",
    projectId: "uber-51c15",
    storageBucket: "uber-51c15.appspot.com",
    messagingSenderId: "1083919978494",
    appId: "1:1083919978494:web:4b0de357a8172d15907aaf"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  export default firebase ;