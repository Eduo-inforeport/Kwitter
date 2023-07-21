
var firebaseConfig = {
      apiKey: "AIzaSyD0Dl61VzdzvXmOrfl6CbRRJqTrBf94WzQ",
      authDomain: "kwitter-65f13.firebaseapp.com",
      databaseURL: "https://kwitter-65f13-default-rtdb.firebaseio.com",
      projectId: "kwitter-65f13",
      storageBucket: "kwitter-65f13.appspot.com",
      messagingSenderId: "189575011188",
      appId: "1:189575011188:web:3e607b08eaddfb6a9dea21"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("nope").innerHTML="Welcome "+user_name+"!";

    function Addroom(){

    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='Redirect(this.id)'>#"+Room_names+"</div>  <hr>";
       document.getElementById("output").innerHTML+=row;


      });});}
getData();

function Redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}