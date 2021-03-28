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
  roof = new Ground(400, 30, 700, 30);

  bob1 = new Bob(300, 300);
  bob2 = new Bob(400, 300);
  bob3 = new Bob(500, 300);
  bob4 = new Bob(600, 300);
  bob5 = new Bob(700, 300);

  rope1 = new Rope(bob1.body, roof.body, -200, 0);
  rope2 = new Rope(bob2.body, roof.body, -100, 0);
  rope3 = new Rope(bob3.body, roof.body, 0, 0);
  rope4 = new Rope(bob4.body, roof.body, 100, 0);
  rope5 = new Rope(bob5.body, roof.body, 200, 0);

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightgrey");

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {
      x: -80,
      y: -65,
    });
  }
}
