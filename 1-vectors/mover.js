class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    // v1 constant acceleration
    // this.acceleration = createVector(-0.001, 0.01);
    this.acceleration = createVector(0, 0);
    this.topSpeed = 10;
  }

  update() {
    // v2 keyboard controlled acceleration
    if (keyIsDown(UP_ARROW)) {
      this.acceleration = createVector(0.1, 0);
    } else if (keyIsDown(DOWN_ARROW)) {
      this.acceleration = createVector(-0.1, 0);
    } else {
      this.acceleration = createVector(0, 0);
    }
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    if (this.velocity.x < 0) {
      this.velocity.setMag(0);
    }
    this.position.add(this.velocity);
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}
