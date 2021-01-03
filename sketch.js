
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall,ground,body1,body2,body3,dustBin;

function preload()
{
	
}

function setup() {
	createCanvas(1400,600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,00,32.5);
    ground = new Ground(700,590,1400,20);

	body2 = new Box(965,455,15,220,false);
	body3 = new Box(1130,455,15,220,false);
	body1 = new Box(1050,570,150,20,true);

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");
  console.log(mouseX,mouseY)
  
  paperBall.display();
  ground.display();
  
  body2.display();
  body3.display();
  body1.display();

  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperBall.body,paperBall.body.positon,{x:225,y:-250})
}
}

