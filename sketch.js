const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,ground;
var snowObj;
var canvas;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  snowObj = new Snow(random(20,780),0,30);
}

function draw() {
  background(backgroundImg);  
  snowObj.display();
}