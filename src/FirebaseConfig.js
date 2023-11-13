import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import firebase from 'firebase';
require('firebase/auth');

const config = {
    apiKey: "AIzaSyBjlS6879H0nP4HIP8ae2pkzCg2VchxgMU",
    authDomain: "fir-recipes-18995.firebaseapp.com",
    projectId: "fir-recipes-18995",
    storageBucket: "fir-recipes-18995.appspot.com",
    messagingSenderId: "1045328464938",
    appId: "1:1045328464938:web:685bbf95bddcc6c6d38753",
    measurementId: "G-LR6C8KC25N",
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
    console.log("init terminé");
}
export default firebase;