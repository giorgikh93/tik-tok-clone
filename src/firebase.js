import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD47q29MCx4JSO5psZCZKJsAfsgCFM8lKk",
    authDomain: "tic-toc-clone-5c6a2.firebaseapp.com",
    databaseURL: "https://tic-toc-clone-5c6a2.firebaseio.com",
    projectId: "tic-toc-clone-5c6a2",
    storageBucket: "tic-toc-clone-5c6a2.appspot.com",
    messagingSenderId: "961630868805",
    appId: "1:961630868805:web:66e5d17155f2bf7b4d1a2c",
    measurementId: "G-0FVE3835DC"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider

export {auth, provider}
export default db 
