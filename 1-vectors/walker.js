class Walker {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(1, 1);
  }

  show() {
    stroke(0);
    point(this.position.x, this.position.y);
  }

  step() {
    const xdirection = floor(random(3)) - 1;
    const ydirection = floor(random(3)) - 1;
    const xstepSize = randomGaussian(4, 2);
    const ystepSize = randomGaussian(4, 2);
    this.velocity.x = xdirection * xstepSize;
    this.velocity.y = ydirection * ystepSize;
    this.position.add(this.velocity);
  }
}
