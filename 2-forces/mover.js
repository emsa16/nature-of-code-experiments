const MASS_COEFFICIENT = 16;
const NORMAL_FORCE = 1;

class Mover {
  constructor(mass, x, y, frictionCoefficient) {
    this.mass = mass;
    this.diameter = mass * MASS_COEFFICIENT;
    this.radius = this.diameter / 2;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.frictionMag = frictionCoefficient * NORMAL_FORCE;
    this.dragForce = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
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
    circle(this.position.x, this.position.y, this.diameter);
  }

  checkEdges() {
    const bounce = 0.95;

    if (this.position.x + this.radius > width) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1 * bounce;
    } else if (this.position.x - this.radius < 0) {
      this.position.x = 0 + this.radius;
      this.velocity.x *= -1 * bounce;
    }

    if (this.position.y + this.radius > height) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1 * bounce;
    } else if (this.position.y - this.radius < 0) {
      this.position.y = 0 + this.radius;
      this.velocity.y *= -1;
    }
  }

  contactEdge() {
    return this.position.y > height - this.radius - 1;
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
    const dragMag = velocityMag * velocityMag * dragCoefficient;
    this.dragForce.setMag(dragMag);
    this.applyForce(this.dragForce);
  }
}
