const DRAG_CONSTANT = 0.1;
const WIND_LIMIT = 0.1;

class Balloon {
  constructor() {
    this.tx = 0;
    this.floatForce = createVector(0, -0.2);
    this.dragForce = createVector(0, 0);
    this.windForce = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.position = createVector(width / 2, height - 50);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  calculateDragForce() {
    const velocity = this.velocity.mag();
    const dragMagnitude = velocity * velocity * DRAG_CONSTANT;
    this.dragForce = this.velocity.copy();
    this.dragForce.mult(-1);
    this.dragForce.setMag(dragMagnitude);
  }

  calculateWindForce() {
    const wind = map(noise(this.tx), 0, 1, -WIND_LIMIT, WIND_LIMIT);
    this.windForce = createVector(wind, 0);
    this.tx += 0.03;
  }

  update() {
    this.applyForce(this.floatForce);
    this.calculateDragForce();
    this.calculateWindForce();
    this.applyForce(this.windForce);
    this.applyForce(this.dragForce);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    if (this.position.y - 75 / 2 < 0) {
      this.position.y = 75 / 2;
      this.velocity.y *= -1;
    }
    if (this.position.x - 60 / 2 < 0) {
      this.position.x = 60 / 2;
      this.velocity.x *= -1;
    }
    if (this.position.x + 60 / 2 > width) {
      this.position.x = width - 60 / 2;
      this.velocity.x *= -1;
    }

    this.acceleration.mult(0);
  }

  show() {
    background(100, 150, 255);

    noFill();
    beginShape();
    let amplitude = 5;
    let frequency = 0.04;
    for (let y = this.position.y + 25; y <= this.position.y + 100; y += 10) {
      let x = this.position.x + amplitude * sin(frequency * y);
      vertex(x, y);
    }
    endShape();

    fill(255, 50, 50);
    ellipse(this.position.x, this.position.y, 60, 75);
  }
}
