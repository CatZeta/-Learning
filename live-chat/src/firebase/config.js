import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDMeFWE87TGSQzozVAq_4vbF4w88ksB_XA",
    authDomain: "udemy-vue-firebase-c98ce.firebaseapp.com",
    projectId: "udemy-vue-firebase-c98ce",
    storageBucket: "udemy-vue-firebase-c98ce.appspot.com",
    messagingSenderId: "316150236148",
    appId: "1:316150236148:web:0d588055d59cd4b9c32fa1"
  };

  firebase.initializeApp(firebaseConfig)
  
  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp }