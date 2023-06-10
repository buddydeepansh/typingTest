import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCv8kenryTqYEshTiljJX7yCSfe8LlM-gg",

  authDomain: "typingtest-6faca.firebaseapp.com",

  projectId: "typingtest-6faca",

  storageBucket: "typingtest-6faca.appspot.com",

  messagingSenderId: "389593674294",

  appId: "1:389593674294:web:ce06bef52cb23ac8cc5e97",
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db }

