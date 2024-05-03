import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDMeFWE87TGSQzozVAq_4vbF4w88ksB_XA",
    authDomain: "udemy-vue-firebase-c98ce.firebaseapp.com",
    projectId: "udemy-vue-firebase-c98ce",
    storageBucket: "udemy-vue-firebase-c98ce.appspot.com",
    messagingSenderId: "316150236148",
    appId: "1:316150236148:web:a729f3d0d63db2c4c32fa1"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export {projectFirestore, timestamp}