class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    // v1
    // let choice = floor(random(4));
    // if (choice === 0) {
    //   this.x++;
    // } else if (choice === 1) {
    //   this.x--;
    // } else if (choice === 2) {
    //   this.y++;
    // } else {
    //   this.y--;
    // }

    // v2
    // const xstep = floor(random(3)) - 1;
    // const ystep = floor(random(3)) - 1;
    // this.x += xstep;
    // this.y += ystep;

    // // v3
    // const xstep = random();
    // const ystep = random();
    // if (xstep < 0.55) {
    //   this.x++;
    // } else {
    //   this.x--;
    // }
    // if (ystep < 0.55) {
    //   this.y++;
    // } else {
    //   this.y--;
    // }

    // v4
    const mouseXDirection = mouseX > this.x ? 1 : -1;
    const mouseYDirection = mouseY > this.y ? 1 : -1;
    const xstep = floor(random(3)) - 1;
    const ystep = floor(random(3)) - 1;
    this.x += random() > 0.2 ? xstep : mouseXDirection;
    this.y += random() > 0.2 ? ystep : mouseYDirection;
  }
}
