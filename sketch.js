var bob1
var rope1,roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1490, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(745,300,20,20)
    bob2 = new Bob(825,300,20,20)
    bob3 = new Bob(665,300,20,20)
    bob4 = new Bob(905,300,20,20)
    bob5 = new Bob(570,300,20,20)
    //middle
    roof1 = new Roof(745,100,80,20)
    //middleright
    roof2 = new Roof(815,100,80,20)
    //middleleft
    roof3 = new Roof(675,100,80,20)
    //middleright2
    roof4 = new Roof(885,100,80,20)
    //middleleft2
    roof5 = new Roof(605,100,80,20)
    rope1 = new Rope(bob1.body,roof1.body,0*2,0)
    rope2 = new Rope(bob2.body,roof2.body,0*2,0)
    rope3 = new Rope(bob3.body,roof3.body,0*2,0)
    rope4 = new Rope(bob4.body,roof4.body,0*2,0)
    rope5 = new Rope(bob5.body,roof5.body,0*2,0)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  text(mouseX+','+mouseY,200,45)
  background("skyblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-0.09,y:-0.09});
  }
}


