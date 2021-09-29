const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImg;
var cannon;
var angle;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
cannonBase = loadImage("./assets/cannon_base.png");
}
function setup() {
  createCanvas(1200,600);
  angleMode(DEGREES)
  angle=15

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 130, 100, angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImg);
  Engine.update(engine);
    tower.display();
    cannon.display();
 
}

