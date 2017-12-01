firebase.initializeApp({
    apiKey: "AIzaSyAe6AyBbC6nd37GH9iJpdZ7tHWYaIt7kmM",
    authDomain: "huskeliste-b7374.firebaseapp.com",
    projectId: "huskeliste-b7374"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var todoE = document.querySelector('.todo');
var knappE = document.querySelector('.knapp');
var listeE = document.querySelector('.liste');

knappE = addEventListener('click', function () {
    db.collection("huskeliste").add({
        todo: todoE.value
    });
    todoE.value = "";
});


var ref = db.collection("huskeliste");

ref.onSnapshot(function (data){
   listeE.innerHTML = "";
   var dokument = data.docs;
   for(var x in dokument){
       listeE.innerHTML += "<li>" +  dokument[x].data().todo + "</li>";
   }
});