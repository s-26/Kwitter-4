function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}
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