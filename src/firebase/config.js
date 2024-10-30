import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJ3EbE4Y-EgH09movxQdLIdpGeky6_0qg",
    authDomain: "cooking-ninja-site-c41c7.firebaseapp.com",
    projectId: "cooking-ninja-site-c41c7",
    storageBucket: "cooking-ninja-site-c41c7.appspot.com",
    messagingSenderId: "464052319303",
    appId: "1:464052319303:web:3837f22fe6cd1287b1ed62"
  }

  // initialize firebase
  firebase.initializeApp(firebaseConfig)

  // initialize services
 const projectFirestore = firebase.firestore()

 export { projectFirestore  }
