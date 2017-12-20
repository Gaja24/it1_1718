

    firebase.initializeApp({
        apiKey: "AIzaSyA8AG8SMweTNFHrkMIv_sFzN0xAA2iX7xo",
        authDomain: "firestore-224e3.firebaseapp.com",
        projectId: "firestore-224e3",
        storageBucket: "firestore-224e3.appspot.com"
    });

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var skjemainfoInput = document.querySelector('.skjemainfo');
var skjemapakkerInput = document.querySelector('.skjemapakker');
var skjemaformInput = document.querySelector('.skjemaform');
var sendKnapp = document.querySelector('.send');

sendKnapp.addEventListener('click', function () {

    var storageRef = firebase.storage().ref('it-1/skjema');
});

db.collection("skjema").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })