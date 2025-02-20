const NORMAL_FORCE_SQUARE_MOVER = 1;

class SquareMover {
  constructor(sideLength, x, y, frictionCoefficient) {
    this.sideLength = sideLength;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.frictionMag = frictionCoefficient * NORMAL_FORCE_SQUARE_MOVER;
    this.dragForce = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, 1);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    stroke(0);
    fill(175);
    rect(this.position.x, this.position.y, this.sideLength, this.sideLength);
  }

  checkEdges() {
    const bounce = 0.95;

    if (this.position.x + this.sideLength > width) {
      this.position.x = width - this.sideLength;
      this.velocity.x *= -1 * bounce;
    } else if (this.position.x - this.sideLength < 0) {
      this.position.x = 0 + this.sideLength;
      this.velocity.x *= -1 * bounce;
    }

    if (this.position.y + this.sideLength > height) {
      this.position.y = height - this.sideLength;
      this.velocity.y *= -1 * bounce;
    } else if (this.position.y - this.sideLength < 0) {
      this.position.y = 0 + this.sideLength;
      this.velocity.y *= -1;
    }
  }

  contactEdge() {
    return this.position.y > height - this.sideLength - 1;
  }

  applyFriction() {
    if (this.contactEdge()) {
      const friction = p5.Vector.mult(this.velocity, -1);
      friction.setMag(this.frictionMag);
      this.applyForce(friction);
    }
  }

  applyDrag(dragCoefficient) {
    this.dragForce = p5.Vector.mult(this.velocity, -1);
    const velocityMag = this.velocity.mag();
    const dragMag =
      velocityMag * velocityMag * dragCoefficient * (this.sideLength / 30);
    this.dragForce.setMag(dragMag);
    this.dragForce.limit(velocityMag);
    this.applyForce(this.dragForce);
  }
}
