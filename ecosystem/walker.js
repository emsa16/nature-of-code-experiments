class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = floor(random(0, 1) * 10000);
    this.ty = floor(random(1, 2) * 10000);
    this.ttx = floor(random(2, 3) * 10000);
    this.tty = floor(random(3, 4) * 10000);
  }

  show() {
    // TODO rotate entity with direction
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
