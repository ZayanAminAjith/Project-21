
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var rightwall;
var leftwall;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	
	var ballOptions={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,200,15,ballOptions)
    World.add(world,ball)
  

	//Create the Bodies Here.

	rightwall = new Ground(1350,600,10,100)
	leftwall = new Ground(1150,600,10,100)
	ground = new Ground(400,675,3000,50)
	

	Engine.run(engine);
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	background(0);
 	rectMode(CENTER);
  	ground.show();
  	rightwall.show();
  	leftwall.show();
  	Engine.update(engine);

  	ellipse(ball.position.x,ball.position.y,15)
 	drawSprites();
 
  	if(keyDown === UP_ARROW){
	  uforce()
  	}
}

function uforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:+0.01,y:0.01,})
  }

