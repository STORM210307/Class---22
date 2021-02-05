const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box,ground;
var ball;


function setup() {
  createCanvas(400,400);
  
engine = Engine.create();
world = engine.world;
var option = {
  isStatic : true,
}

ground = Bodies.rectangle(200,380,400,20,option);

World.add(world, ground);

var options = {
  restitution: 1.8,
}

box = Bodies.rectangle(200,200,30,30,options);

World.add(world, box);


ball = Bodies.circle(100,200,30,options);

World.add(world, ball);

}

function draw() {
  background(0);  
  
Engine.update(engine);
 rectMode(CENTER);
rect(ground.position.x, ground.position.y,400,20);

rect(box.position.x, box.position.y, 30,30);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y , 30, 30);



}