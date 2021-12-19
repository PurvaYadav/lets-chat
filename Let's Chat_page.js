
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyDxKyE5GZxnqanvykVj5x4Ty7t4CpNsLes",
      authDomain: "let-s-chat-fe8c6.firebaseapp.com",
      projectId: "let-s-chat-fe8c6",
      storageBucket: "let-s-chat-fe8c6.appspot.com",
      messagingSenderId: "698407909881",
      appId: "1:698407909881:web:91bf2e79a227fc19c92528",
      measurementId: "G-MG5E5V2VC9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.setItem("user_name");
room_name = localStorage.setItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"img class='user_tick' src='tick.png'</h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button_tag = "button class='btn btn-warning' id="+firebase_message_id+" value="+ like +" onclick='updateLike(this.id)";
span_with_tag = "<span class='glyphion glyphion-like>'like:"+ like +"</h4>";

row = +name_with_tag +message_with_tag +like_button_tag +span_with_tag; 
document.getElementById("output") +=row;
//End code
      } });  }); }
getData();

function updatelike(message_id){
      console.log("clicked on like button - "+message_id);
      button_id = message_id;
      likes = document.getElementById(message_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
    
    firebase.database().ref(room_name).child(message_id).update({
       like:updated_likes
        });
    }

function send() {
 msg = document.getElementsById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementsById("msg").value = "";
}