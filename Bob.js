class Bob {
  constructor(x, y) {
    var options = {
      isStatic: true,
      restitution: 0.8,
      friction: 0,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, 60, options);
    this.radius = 60;

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    fill("red");
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
