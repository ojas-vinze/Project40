var database;
var back_img;
var gameState=0;
var playerCount=0;
var allPlayers;
var score=0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1img, fruit2img, fruit3img, fruit4img, fruit5img;
var playerimg;
var rand;
var rande;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  playerimg = loadImage("images/basket2.png");
  fruit1img = loadImage("images/apple2.png");
  fruit2img = loadImage("images/banana2.png");
  fruit3img = loadImage("images/melon2.png");
  fruit4img = loadImage("images/orange2.png");
  fruit5img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(back_img);

  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }

  if(playerCount===2){
    game.update(1)
  }
}
