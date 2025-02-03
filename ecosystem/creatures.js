// v1 - chapter 0
class Walker1 {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = floor(random(0, 1) * 10000);
    this.ty = floor(random(1, 2) * 10000);
    this.ttx = floor(random(2, 3) * 10000);
    this.tty = floor(random(3, 4) * 10000);
  }

  show() {
    fill(255, 255);
    stroke(0);
    circle(this.x, this.y, 20);

    triangle(
      this.x + 4,
      this.y,
      this.x + 25,
      this.y + 10,
      this.x + 25,
      this.y - 10
    );

    triangle(
      this.x - 4,
      this.y,
      this.x - 25,
      this.y + 10,
      this.x - 25,
      this.y - 10
    );

    fill(255, 0, 0);
    stroke(255);
    circle(this.x, this.y - 5, 8);
  }

  step() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, width);
    this.tx += map(noise(this.ttx), 0, 1, 0.0001, 0.014);
    this.ty += map(noise(this.tty), 0, 1, 0.0001, 0.014);
    this.ttx += 0.01;
    this.tty += 0.01;
  }
}

// v2 - vectors
// TODO different types of creatures - control just with acceleration; also add more pauses
//  * fly: erratic buzzing, nervous
//  * bunny: gentle hops
//  * snake: slithering
//  * bird: accelerating when taking off, otherwise slowly drifting and changing direction
//  * fish: sudden changes in direction
// TODO improve visual design + add animation, e.g. wings flapping, rotating with direction
class Walker2 {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.tx = floor(random(0, 1) * 10000);
    this.ty = floor(random(1, 2) * 10000);
    this.ttx = floor(random(2, 3) * 10000);
    this.tty = floor(random(3, 4) * 10000);
  }

  show() {
    fill(200, 255);
    stroke(0);
    circle(this.position.x, this.position.y, 20);

    triangle(
      this.position.x + 4,
      this.position.y,
      this.position.x + 25,
      this.position.y + 10,
      this.position.x + 25,
      this.position.y - 10
    );

    triangle(
      this.position.x - 4,
      this.position.y,
      this.position.x - 25,
      this.position.y + 10,
      this.position.x - 25,
      this.position.y - 10
    );

    fill(255, 0, 0);
    stroke(255);
    circle(this.position.x, this.position.y - 5, 8);
  }

  step() {
    const magnitude = Number.parseFloat(
      document.getElementById("magnitude").value
    );
    document.getElementById("magnitude-value").textContent = magnitude;
    const velocityLimit = Number.parseFloat(
      document.getElementById("velocity").value
    );
    document.getElementById("velocity-value").textContent = velocityLimit;

    this.acceleration.x = map(noise(this.tx) + 0.025, 0, 1, -1, 1);
    this.acceleration.y = map(noise(this.ty) + 0.025, 0, 1, -1, 1);
    this.tx += map(noise(this.ttx), 0, 1, 0.01, 0.2);
    this.ty += map(noise(this.tty), 0, 1, 0.01, 0.2);
    this.ttx += 0.01;
    this.tty += 0.01;
    this.acceleration.setMag(magnitude);

    this.velocity.add(this.acceleration);
    this.velocity.limit(velocityLimit);

    this.position.add(this.velocity);
    if (this.position.x > width) this.position.x = width;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.y > height) this.position.y = height;
    if (this.position.y < 0) this.position.y = 0;
  }
}
