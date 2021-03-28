class Rope {
  constructor(bodyA, bodyB, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      //stiffness: 1.0,
      //length: 10,
      pointB: { x: this.offsetX, y: this.offsetY },
    };

    this.rope = Constraint.create(options);

    World.add(world, this.rope);
  }

  display() {
    var point1 = this.rope.bodyA.position;
    var point2 = this.rope.bodyB.position;

    strokeWeight(5);
    line(point1.x, point1.y, point2.x + this.offsetX, point2.y + this.offsetY);
  }
}
