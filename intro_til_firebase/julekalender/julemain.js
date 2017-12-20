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


/***for(var lukenummer = 1; lukenummer<=24; lukenummer++){
    db.collection("julekalender").add({
        luke: lukenummer

    });

}*/

var pakkeE= document.querySelector('.pakker');

var ref = db.collection('julekalender').orderBy('luke', 'asc');
ref.onSnapshot(function (data) {
    var objekt = data.docs;

    for(var x in objekt){

        pakkeE.innerHTML +=     "<div class='luke'>"+
                                objekt[x].data().luke +
                                "</div>";
    }
});

<script>
var pakkerE= document.querySelector('.pakker');


pakkerE.innerHTML +='<span class="gold"> + <br></span>';
pakkerE.innerHTML +='<span class="gold"> +++ <br></span>';
pakkerE.innerHTML +='<span class="gold"> + <br></span>';


for(var y = 0; y<50; y=y+1){

    for(var x=0; x<y+1; x=x+1){
        if((x*y)%7===0){
            pakkerE.innerHTML +='<span class="red"> + </span>';
        }
        else{
            pakkerE.innerHTML +='<span class="green"> + </span>';
        }
    }

    pakkerE.innerHTML +='<br>';
}
pakkerE.innerHTML +='<span class="brun"> ++++++ <br></span>';
pakkerE.innerHTML +='<span class="brun"> ++++++ <br></span>';
pakkerE.innerHTML +='<span class="brun"> ++++++ <br></span>';


</script>
