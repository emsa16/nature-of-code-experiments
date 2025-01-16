class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = 0;
    this.ty = 10000;
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
    // // v4
    // const mouseXDirection = mouseX > this.x ? 1 : -1;
    // const mouseYDirection = mouseY > this.y ? 1 : -1;
    // const xstep = floor(random(3)) - 1;
    // const ystep = floor(random(3)) - 1;
    // this.x += random() > 0.2 ? xstep : mouseXDirection;
    // this.y += random() > 0.2 ? ystep : mouseYDirection;
    // // v5
    // const xdirection = floor(random(3)) - 1;
    // const ydirection = floor(random(3)) - 1;
    // const xstepSize = randomGaussian(4, 2);
    // const ystepSize = randomGaussian(4, 2);
    // this.x += xdirection * xstepSize;
    // this.y += ydirection * ystepSize;
    // // v6
    // const step = 10;
    // const stepx = this.acceptreject(-step, step);
    // const stepy = this.acceptreject(-step, step);
    // this.x += stepx;
    // this.y += stepy;
    // // v7
    // this.x = map(noise(this.tx), 0, 1, 0, width);
    // this.y = map(noise(this.ty), 0, 1, 0, width);
    // this.tx += 0.01;
    // this.ty += 0.01;
    // // v8
    // const xstepSize = map(noise(this.tx), 0, 1, -3, 3);
    // const ystepSize = map(noise(this.ty), 0, 1, -3, 3);
    // this.x += xstepSize;
    // this.y += ystepSize;
    // // console.log(xstepSize, ystepSize, this.x, this.y);
    // this.tx += 0.01;
    // this.ty += 0.01;
  }

  acceptreject(min, max) {
    while (true) {
      const r1 = random(min, max);
      const probability = r1 ** 2;
      const r2 = random(min, max);
      if (r2 < probability) {
        return r1;
      }
    }
  }
}
