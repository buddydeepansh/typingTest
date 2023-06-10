import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCv8kenryTqYEshTiljJX7yCSfe8LlM-gg",

  authDomain: "typingtest-6faca.firebaseapp.com",

  projectId: "typingtest-6faca",

  storageBucket: "typingtest-6faca.appspot.com",

  messagingSenderId: "389593674294",

  appId: "1:389593674294:web:ce06bef52cb23ac8cc5e97",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebaseApp.fireStore()

export { auth, db }
