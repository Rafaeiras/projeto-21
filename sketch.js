
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 
var engine
var world 
var paredeDaDireita



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

   var ball_options = {
   isStatic:false,
   restitution: 0.3,
   friction: 0,
   density: 1.2

}
  ball = Bodies.circle (260,100,20,ball_options);
  World.add (world,ball);

 
  var paredeDaDireita_opitions = {
   isStatic:true
  }
	paredeDaDireta = Bodies.rectangle (350,600,20,120,paredeDaDireita_opitions);
	World.add (world,paredeDaDireita);


	
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.run(engine);
  ellipse (ball.position.x,ball.position.y,20,20);
 
}



