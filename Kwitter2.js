
var firebaseConfig = {
  apiKey: "AIzaSyBbedwg32NZCA8kWL2Ih790Ig76HSCZhck",
  authDomain: "project-94-1dcc1.firebaseapp.com",
  databaseURL: "https://project-94-1dcc1-default-rtdb.firebaseio.com",
  projectId: "project-94-1dcc1",
  storageBucket: "project-94-1dcc1.appspot.com",
  messagingSenderId: "46178660613",
  appId: "1:46178660613:web:f0049dca8be9d80ba7876c"
};

// Initialize Firebase
 //const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


username = localStorage.getItem("user_name")
document.getElementById("n_ame").innerHTML = "Welcome" + username + "!";

function ad() {
  add_room = document.getElementById("add-room").value;
  firebase.database().ref("/").child(add_room).update({
    name : "coder"
  });
  localStorage.setItem("ad",ad);
  window.location = "kwitter3.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Roomname is "+Room_names);
    other_name = "<div class = 'roomname' id = "+Room_names+"onclick = 'redirectRoom(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += other_name;
 //End code
 });});}
getData();


function redirectRoom(name)
{
      console.log(name);
      localStorage.setItem("ad",name);
      window.location = "kwitter2.html";
}
function logout() {
      localStorage.removeItem(user_name);
      localStorage.removeItem(ad);
      window.location = "Kwitter.html";


}
