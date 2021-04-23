
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rod1;
var constraint,constraint1,constraint2,constraint3;




function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


  bob1=new bob(250);
	bob2=new bob(350);
	bob3=new bob(450);
	bob4=new bob(550);
	bob5=new bob(650);

	rod1=new rod();


  constraint=new Rope(bob1.body,rod1.body,-200);
  constraint1=new Rope(bob2.body,rod1.body,-100);
  constraint2=new Rope(bob3.body,rod1.body,0);
  constraint3=new Rope(bob4.body,rod1.body,100);
  constraint4=new Rope(bob5.body,rod1.body,200);
		

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
 

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rod1.display();

  constraint.display(-200);
  constraint1.display(-100);
  constraint2.display(0);
  constraint3.display(100);
  constraint4.display(200);

  force();
  
  drawSprites();


 
}


function force()
{

if (keyCode==UP_ARROW){
Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-50});

}

}
