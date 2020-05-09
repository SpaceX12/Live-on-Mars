class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value", function(data){
            gamestate = data.val();
        })
    }
    updateState(state){
        database.ref("/").update({gameState:state})
    }
    start(){
        if(gameState == 0){
            player = new Martian();
            player.getCount();
            form = new Survey();
            form.display();
        }
    }
}