
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,groundObject,paper1;	
var world;


function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(800,485,1600,20);
	dustbin=new Dustbin(1200,420,180,190);
	side1=new Dustbin(1300,310,20,200);
	side2=new Dustbin(1100,310,20,200);
	paper1=new Paper(300,455,20);

	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(230);

 

  groundObject.display();
  dustbin.display();
  //image(this.image,0,0,this.radius*2,this.radius*2);
  paper1.display();
  //side1.display();
  //side2.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}
