firebase.initializeApp({
    apiKey: "AIzaSyA8AG8SMweTNFHrkMIv_sFzN0xAA2iX7xo",
    authDomain: "firestore-224e3.firebaseapp.com",
    projectId: "firestore-224e3",
    storageBucket: "firestore-224e3.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnInput= document.querySelector('navn');
var bilnummerInput= document.querySelector('bilnummer');
var hastighetInput= document.querySelector('hastighet');
var sendKnapp= document.querySelector('send');

sendKnapp=addEventListener('click', function(){

};







db.collection("trafikk").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
});