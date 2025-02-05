let balloon;

function setup() {
  createCanvas(640, 640);
  balloon = new Balloon();
}

function draw() {
  background(200);
  balloon.update();
  balloon.show();
}
