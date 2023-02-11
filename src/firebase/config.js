import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCupfPZlGqMUv8hMXYvDDyrPN3KBv8qjgM",
    authDomain: "space-tourism-13f08.firebaseapp.com",
    projectId: "space-tourism-13f08",
    storageBucket: "space-tourism-13f08.appspot.com",
    messagingSenderId: "41537220768",
    appId: "1:41537220768:web:d572a5a3a8bc2c9cc359c5"
  };



//init firebase 
const app = initializeApp(firebaseConfig)

//init services
const db = getFirestore()
const storage = getStorage(app)
// const projectStorage = firebase.storage()
// const timestamp = firebase.firestore.Timestamp 

export {db, storage}