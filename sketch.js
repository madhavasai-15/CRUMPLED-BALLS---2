
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustBin;
var dustBin_1, dustBin_2, dustBin_3;

var backGroundImage;

function preload(){
	backGroundImage = loadImage("BackGround.png");
}

function setup() {
	createCanvas(1280, 720);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(640, 620, 1280, 20);

	paper = new Paper(140, 360);

	dustBin = new DustBin(1070, 525, 10, 130, 1200, 525, 10, 130, 1135, 505, 138, 167);

	Engine.run(engine);
}


function draw() {
  	rectMode(CENTER);
	background(backGroundImage);	
	drawSprites();
	textSize(32);
	fill(255);
	text("Throw the paper", 500, 200);
	text("in the Dust bin", 590, 240);
	
	ground.display();
	dustBin.display();
	paper.display();


}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 560, y: -560});
	}
}

