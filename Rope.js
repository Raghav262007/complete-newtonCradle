class Rope {
  constructor(bodyA, bodyB, offsetX, offsetY) {
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      //stiffness: 0.04,
      //length: 10,
      pointB: { x: offsetX, y: offsetY },
    };

    this.rope = Constraint.create(options);
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    World.add(world, this.rope);
  }

  display() {
    var point1 = this.rope.bodyA.position;
    var point2 = this.rope.bodyB.position;

    strokeWeight(5);
    line(point1.x, point1.y, this.offsetX, this.offsetY);
  }
}
