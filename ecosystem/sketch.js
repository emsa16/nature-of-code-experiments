let walker1;
let walker2;

function setup() {
  createCanvas(400, 400);
  walker1 = new Walker();
  walker2 = new Walker();
  background(225);
}

function draw() {
  background(225, 225, 225, 40);
  walker1.step();
  walker1.show();
  walker2.step();
  walker2.show();
}
