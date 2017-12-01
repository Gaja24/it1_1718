firebase.initializeApp({
    apiKey: "AIzaSyAsLk7mhDJkda_uUL2B0WSU81CmyqUkEcU",
    authDomain: "brukerdatabase24.firebaseapp.com",
    projectId: "brukerdatabase24"

    // Initialize Cloud Firestore through Firebase
    var: db = firebase.firestore();

    var  fornavnE = document.querySelector('.fornavn');
    var etternavnE = document.querySelector('.etternavn');
    var knappE = document.querySelector('.knapp');
})

knappE.addEventListener('click', function () {
    db.collection("Brukerdatabase").add({
        fornavn: fornavnE.value,
        etternavn: etternavnE.value
    });

    fornavnE.value = "";
    etternavnE.value = "";
});

var ref = db.collection("brukerdatabase");
ref.onSnapshot(function (data){
    listeE.innerHTML = "";
    etternavnE.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" +  dokument[x].data(). + "</li>";
    }
});


