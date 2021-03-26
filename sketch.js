const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

function preload() {}

function setup() {
  createCanvas(800, 500);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  roof = new Ground(370, 100, 400, 30);

  bob1 = new Bob(240, 350);
  bob2 = new Bob(300, 350);
  bob3 = new Bob(360, 350);
  bob4 = new Bob(420, 350);
  bob5 = new Bob(480, 350);

  rope1 = new Rope(bob1.body, roof.body, 240, 100);
  rope2 = new Rope(bob2.body, roof.body, 300, 100);
  rope3 = new Rope(bob3.body, roof.body, 360, 100);
  rope4 = new Rope(bob4.body, roof.body, 420, 100);
  rope5 = new Rope(bob5.body, roof.body, 480, 100);

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightgrey");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {
      x: 100,
      y: 100,
    });
  }
}
