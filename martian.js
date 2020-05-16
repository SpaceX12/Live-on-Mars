class Martian{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
    
      update(){
        var playerIndex = "players/player" + playerCount;
        database.ref(playerIndex).set({

          name:this.name,
          distance:this.distance
          
        });
      }

      static getPlayerInfo(){
        database.ref("players").on("value",function(data){
          allPlayers = data.val();
        })
      }

}    