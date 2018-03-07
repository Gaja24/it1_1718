// Initialize Firebase
var config = {
    apiKey: "AIzaSyA8AG8SMweTNFHrkMIv_sFzN0xAA2iX7xo",
    authDomain: "firestore-224e3.firebaseapp.com",
    databaseURL: "https://firestore-224e3.firebaseio.com",
    projectId: "firestore-224e3",
    storageBucket: "firestore-224e3.appspot.com",
    messagingSenderId: "146684242749"
};
firebase.initializeApp(config);

var db = firebase.firestore();

/***Legge til 24 luker
 for(var lukenummer = 1; lukenummer<=24; lukenummer++){
    db.collection("julekalender").add({
        luke: lukenummer
    });
}
 */

var pakkerE = document.querySelector('.pakker');

var ref = db.collection('julekalender');

var query = ref.where('luke', '==', 24);


query.onSnapshot(function (data) {
    var objekt = data.docs;

    for(var x in objekt){

        pakkerE.innerHTML +=
            objekt[x].data().luke
    }
});