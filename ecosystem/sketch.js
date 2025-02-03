let walker1;
let walker2;

function setup() {
  createCanvas(900, 700, document.getElementById("mainCanvas"));
  walker1 = new Walker1();
  walker2 = new Walker2();
  background(225);
}

function draw() {
  background(225, 225, 225);
  walker1.step();
  walker1.show();
  walker2.step();
  walker2.show();
}
