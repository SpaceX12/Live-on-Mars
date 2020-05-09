var database;
var gameState = 0, playerCount, survey, martian, game;

function setup(){
    database = firebase.database();
    console.log(database);
    
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
}