class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x; // x position
    this.y = y; // y position
    this.w = w; // width
    this.h = h; // height
    this.c = c; // coefficient of drag
  }

  contains(mover) {
    const pos = mover.position;
    return (
      pos.x > this.x &&
      pos.x < this.x + this.w &&
      pos.y > this.y &&
      pos.y < this.y + this.h
    );
  }

  show() {
    noStroke();
    fill(175);
    rect(this.x, this.y, this.w, this.h);
  }
}
