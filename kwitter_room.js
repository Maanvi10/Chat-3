const firebaseConfig = {
      apiKey: "AIzaSyA0_SNayQ607GBNIlJmoPpRQYbrQl5vB38",
      authDomain: "chatty-e37e7.firebaseapp.com",
      projectId: "chatty-e37e7",
      storageBucket: "chatty-e37e7.appspot.com",
      messagingSenderId: "264037811561",
      appId: "1:264037811561:web:e676b722237dfd23e929f8",
      measurementId: "G-9WJN1GZKYZ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " +user_name; 

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
  Chat:"chitter-chatter chitter-chatter "
});
 localStorage.setItem("room_name", room_name);

 window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

