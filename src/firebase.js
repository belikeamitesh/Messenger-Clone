import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCfJ2bI-XDK0ZPM2c36ayfySYrmaYWQrFo",
    authDomain: "messenger-420fd.firebaseapp.com",
    projectId: "messenger-420fd",
    storageBucket: "messenger-420fd.appspot.com",
    messagingSenderId: "835361993701",
    appId: "1:835361993701:web:99f3cd07074e84acd1f50c",
    measurementId: "G-309KTX5PPW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;