
var canvas, backgroundImage,person,personImg;

var gameState = 0;
var playerCount;

var database;
var allPlayers

var form, player, game;


function preload(){
  backgroundImage=loadImage("background.png")
  personImg=loadImage("person.gif")

}


function setup(){
  canvas = createCanvas(1600,800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  background("backgroundImage")
  if(playerCount === 1){
     game.update(1); 
    }
     if(gameState === 1){
        clear();
       game.play();
       }

}

