var firebaseConfig = {
    apiKey: "AIzaSyDEBxQz0y5bpyUIafaHXTggVGZQK_iEurw",
    authDomain: "greensheet-21166.firebaseapp.com",
    databaseURL: "https://greensheet-21166-default-rtdb.firebaseio.com",
    projectId: "greensheet-21166",
    storageBucket: "greensheet-21166.appspot.com",
    messagingSenderId: "311881501155",
    appId: "1:311881501155:web:9773d32cf84c0074fd78d6",
    measurementId: "G-37SC4WD9TP"
  };
  

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
'purpose': "adding room name"
    });
 localStorage.setItem("room_name", room_name);
 window.location = "GreenSheet_room.html";
}
function getData()
{firebase.database().ref("/").on('value', function(snapshot){
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
    room_name = childKey;
    console.log("room_name - " +room_name);
    row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
    document.getElementById("output").innerHTML+= row;

});

    
});
};
 getData();
 function redirectToRoomName(name)
 {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "GreenSheet_page.html";
 }
 function sair() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
 }