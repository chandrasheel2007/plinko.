const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var div_height = 250;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-10, width, 20);

  for(var k=0; k<=width; k+=60){
    divisions.push(new Division(k, 655, 20, 250));
  }

  for(var j=30; j<=width-10; j+=60){
    plinkos.push(new Plinko(j, 100, 10));
  }

  for(var j=0; j<=width; j+=60){
    plinkos.push(new Plinko(j, 200, 10));
  }

  for(var j=30; j<=width-10; j+=60){
    plinkos.push(new Plinko(j, 300, 10));
  }

  for(var j=0; j<=width; j+=60){
    plinkos.push(new Plinko(j, 400, 10));
  }

  

  





  Engine.run(engine);
  
}

function draw() {
  background(0); 
  
  if(frameCount%50===0){

    particles.push(new Particle(random(50, 430), -5, 10));

  }

  ground.display();

  for(var k=0; k<divisions.length; k++){

    divisions[k].display();

  }

  for(var j=0; j<plinkos.length; j++){

    plinkos[j].display();

  }

  for(var k=0; k<particles.length; k++){

    particles[k].display();

  }

  

  
  
}