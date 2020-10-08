import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCCDtdvkM3Cx_sy-peAXIpRgFFBrAryBR8",
    authDomain: "srsc-b2dd6.firebaseapp.com",
    databaseURL: "https://srsc-b2dd6.firebaseio.com",
    projectId: "srsc-b2dd6",
    storageBucket: "srsc-b2dd6.appspot.com",
    messagingSenderId: "556446064962",
    appId: "1:556446064962:web:ca82cba64f73842757e8db",
    measurementId: "G-YPMGEDEP0Q"
})

const db = firebaseApp.firestore()
const auth= firebase.auth()
const storage=firebase.storage()

  export {db , auth,storage}