
  var firebaseConfig = {
      apiKey: "AIzaSyANx1rejBtnJ53GXxGbOrcAZQEFlSMVHyo",
      authDomain: "kwitter-app-2dcfa.firebaseapp.com",
      databaseURL: "https://kwitter-app-2dcfa-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-2dcfa",
      storageBucket: "kwitter-app-2dcfa.appspot.com",
      messagingSenderId: "150647543908",
      appId: "1:150647543908:web:eb2f1686219ba4c1682771",
      measurementId: "G-164S3FBTND"
    };
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+ user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    console.log(" Room Name- "+ Room_names);
    row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML=row;
      });});}
getData();

function addroom(){

  room_name= document.getElementById("input2").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
    });
    window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  console.log(name);
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}