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
  //YOUR FIREBASE LINKS
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML +=row;
//End code
 } });  }); }
getData();
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,like:0
  });
  document.getElementById("msg").value="";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
function updateLike(message_id){
  console.log("clicked on like button"+message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({ like : updated_likes
});
}