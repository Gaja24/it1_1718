firebase.initializeApp({
    apiKey: "AIzaSyDWE4xvlPhUWkp1IEtCysTgKWhnefDiV9s",
    authDomain: "minforstedb24.firebaseapp.com",
    projectId: "minforstedb24"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector('.tittel');
var tekstE = document.querySelector('.tekst');
var knappE = document.querySelector('.knapp');

knappE.addEventListener('click', function () {
    db.collection("mappe").add({
        tittel: tittelE.value,
        tekst: tekstE.value
    });
    tittelE.value = "";
    tekstE.value = "";
});
