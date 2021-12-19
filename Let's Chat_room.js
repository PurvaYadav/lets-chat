// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyDxKyE5GZxnqanvykVj5x4Ty7t4CpNsLes",
      authDomain: "let-s-chat-fe8c6.firebaseapp.com",
      databaseURL: "https://let-s-chat-fe8c6-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-fe8c6",
      storageBucket: "let-s-chat-fe8c6.appspot.com",
      messagingSenderId: "698407909881",
      appId: "1:698407909881:web:91bf2e79a227fc19c92528",
      measurementId: "G-MG5E5V2VC9"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("Room name - " + room_name);
  row = "<div class='room_name'id="+Room_names+" onclick='redirecttoRoomname(this.id);'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

 localStorage.setItem("room_name", room_name);

 window.location="Let's Chat_room.html";
}

function redirecttoRoomname(name) {
      console.log(name);
      localStorage.setItem("Room_name", room_name);
      window.location="Let's Chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
 window.location="index.html";
}

