// Import everything for library connection with firebase
// TODO: Fix all of my errors while importing.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js'
import { analytics } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js'
import { auth } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'
import { firestore } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCNnv0egDvuEA5yjN_zbSkKq49ATjFJ8NY",
    authDomain: "wellosepicadventure.firebaseapp.com",
    projectId: "wellosepicadventure",
    storageBucket: "wellosepicadventure.appspot.com",
    messagingSenderId: "105181777933",
    appId: "1:105181777933:web:49f7a60534e09415fd0544",
    measurementId: "G-08PS09EHJG"
});

// Define imports
// TODO: Make a better framework & and redirect to client area.
const db = firestore(firebaseApp);

var email = document.getElementById("email");
var password = document.getElementById("password");

function signUp() {
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}

function signOut() {
    auth.signOut();
    alert("Successfully signed out!");
}

function signIn() {
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}

auth.onAuthStateChanged(function(user){
    if (user) {
        var email = user.email;
        alert("Active User:" + "" + user.email);
    } else {
        alert("No active user.");
    }
})