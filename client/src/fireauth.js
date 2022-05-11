import firebase from "firebase";
const config = {
    apiKey: "AIzaSyDyY4358zHvluMAQ_1AUoRfuFKGhjpjU0E",
    authDomain: "news-app-339913.firebaseapp.com",
    projectId: "news-app-339913",
    storageBucket: "news-app-339913.appspot.com",
    messagingSenderId: "120241259265",
    appId: "1:120241259265:web:cf0b08c27288b7e9c55100"
  };

const app = firebase.initializeApp(config);
const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const yahooProvider =new firebase.auth.OAuthProvider('yahoo.com');
const twitterProvider = new firebase.auth.TwitterAuthProvider();
export {auth,googleProvider,twitterProvider,yahooProvider};