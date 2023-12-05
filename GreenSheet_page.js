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
room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
       message:msg,
       like:0 
    });
    document.getElementById("msg").value = "";
}
function getData() {
     firebase.database().ref("/"+room_name).on('value', function(snapshot)
      { document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot)
        { childKey = childSnapshot.key; childData = childSnapshot.val();
             if(childKey != "purpose") { firebase_message_id = childKey;
                 message_data = childData;
                  //Start code
                  console.log(firebase_message_id);
                  console.log(message_data);
                  name = message_data['name'];
                  message = message_data['message'];
                  like = message_data['like']
                  name_with_tag = "<h4>"+ name +"<img class='user_tick' src='certo.png'></h4>";
                  message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
                  like_button = "<button class='btn bt' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)' >";
                  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like "+like + "</span></button><hr>";
                  row = name_with_tag + message_with_tag + like_button + span_with_tag;
                  document.getElementById("output").innerHTML += row;
             } }); }); }
             getData();
             function updateLike(message_id)
             {
                console.log("clicked on like button -" + message_id);
                button_id = message_id;
                likes= document.getElementById(button_id).value;
                update_likes = Number(likes) +1;
                console.log(update_likes);
                firebase.database().ref(room_name).child(message_id).update({
                  like: update_likes  
                });
             }
             function sair() {
                localStorage.removeItem("user_name");
                localStorage.removeItem("room_name");
                window.location = "index.html";
             }
             function voltar()
             {
               window.location = "GreenSheet_room.html"
             }