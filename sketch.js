const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;
var leftBody, rightBody, bottomBody;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
  
  paper = new Paper(200, 200, 20);
  ground = new Ground(width/2, 470, width, 20);
  leftBody = new Dustbin(635, 415, 20, 85);
  rightBody = new Dustbin(765, 415, 20, 85);
  bottomBody = new Dustbin(700, 450, 150, 20);

	Engine.run(engine);
}

function draw() {
  background(135, 0, 255);

  Engine.update(engine);
  
  paper.display();
  leftBody.display();
  rightBody.display();
  bottomBody.display();
  ground.display();

  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x : 70, y : -50});
  }
}