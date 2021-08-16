
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBwQIrRhoaXS18Qhy_L1BSHQb89DmwCGqI",
      authDomain: "ipltable2020-hluw.firebaseapp.com",
      databaseURL: "https://ipltable2020-hluw-default-rtdb.firebaseio.com",
      projectId: "ipltable2020-hluw",
      storageBucket: "ipltable2020-hluw.appspot.com",
      messagingSenderId: "724577578038",
      appId: "1:724577578038:web:b3a0210704082904bdfc97"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!!!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey =childSnapshot.key;
                  Room_names =childKey;
                  //Start code
            console.log("room_name"+Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML+=row;      
                  //End code
            });
      });
}
getData();
function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}