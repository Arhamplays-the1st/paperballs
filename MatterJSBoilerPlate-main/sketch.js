
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ball_options
var ground
var radius = 40

function preload()
{

}

function setup() {
	createCanvas(500, 300);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bodies.newbody 
	Engine.run(engine);

	ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.5
	}

	ball = Bodies.circle(100,0,10,ball_options);
	World.add(world, ball);
	
	ground = Bodies.rectangle(450,350,50,10, { isStatic: true });
	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse (ball.position.x,ball.position.y,radius,radius)
  ellipse (ground.position.x,ground.position.y,width,height)
  
}



