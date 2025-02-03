class Mover {
  constructor() {
    this.tx = 10;
    this.ty = 10000;

    this.radius = 24;
    this.topSpeed = 10;
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    // v1 constant acceleration
    // this.acceleration = createVector(-0.001, 0.01);

    // v2 keyboard controlled acceleration
    this.acceleration = createVector(0, 0);
  }

  mapNoiseToAcc(noise) {
    return map(noise, 0, 1, -0.1, 0.1);
  }

  update() {
    // // v2 keyboard controlled acceleration
    // if (keyIsDown(UP_ARROW)) {
    //   this.acceleration = createVector(0.1, 0);
    // } else if (keyIsDown(DOWN_ARROW)) {
    //   this.acceleration = createVector(-0.1, 0);
    // } else {
    //   this.acceleration = createVector(0, 0);
    // }

    // // v3 random acceleration
    // this.acceleration = p5.Vector.random2D();
    // this.acceleration.setMag(random(2));

    // // v4 perlin noise acceleration
    // this.acceleration = createVector(
    //   this.mapNoiseToAcc(noise(this.tx)),
    //   this.mapNoiseToAcc(noise(this.ty))
    // );
    // this.tx += 0.01;
    // this.ty += 0.01;

    // v5 interactive motion
    const mouse = createVector(mouseX, mouseY);
    const direction = p5.Vector.sub(mouse, this.position);

    // // with constant magnitude
    // direction.setMag(0.1);

    // // with magnitude proportional to distance
    // direction.setMag(direction.mag() * 0.001);

    // with magnitude inversely proportional to distance
    direction.setMag(0.5 / direction.mag());

    this.acceleration = direction;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    // // v2 keyboard controlled acceleration
    // if (this.velocity.x < 0) {
    //   this.velocity.setMag(0);
    // }
    this.position.add(this.velocity);
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  checkEdges() {
    if (this.position.x - this.radius > width) {
      this.position.x = 0 - this.radius;
    } else if (this.position.x < 0 - this.radius) {
      this.position.x = width + this.radius;
    }

    if (this.position.y - this.radius > height) {
      this.position.y = 0 - this.radius;
    } else if (this.position.y < 0 - this.radius) {
      this.position.y = height + this.radius;
    }
  }
}
