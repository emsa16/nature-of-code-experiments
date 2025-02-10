const MASS_CONSTANT = 16;

class Mover {
  constructor(mass, x, y) {
    this.mass = mass;
    this.diameter = mass * MASS_CONSTANT;
    this.radius = this.diameter / 2;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
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
    if (this.position.x + this.radius > width) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x - this.radius < 0) {
      this.position.x = 0 + this.radius;
      this.velocity.x *= -1;
    }

    if (this.position.y + this.radius > height) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    } else if (this.position.y - this.radius < 0) {
      this.position.y = 0 + this.radius;
      this.velocity.y *= -1;
    }
  }
}
