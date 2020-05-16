var canvas;

var gameState = 0;
var playerCount;

var database;

var form, martian, game, allPlayers;

function setup(){
    canvas = createCanvas(400,400);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 1){
        game.updateState(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }
}