class Player{
  constructor(){


  }

  getState(){
    var playerCountRef  = database.ref('playerCount');
    playerCountRef.on("value",function(data){
       playerCount = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      playerCount: state
    });
  }
 
  update(name){
   var playerIndex = "player"+playerCount;
   database.ref(playerIndex).set({
    name:name

   });


  }
}



