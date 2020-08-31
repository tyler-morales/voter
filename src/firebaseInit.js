import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const fv = firebase.firestore.FieldValue

export default firebaseApp.firestore()
export { db, fv }
