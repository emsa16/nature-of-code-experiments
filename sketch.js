let walker;

let randomCounts = [];

let total = 20;

function setup() {
  // walker v1
  createCanvas(400, 400);
  walker = new Walker();
  background(225);

  // // random-number distribution
  // createCanvas(640, 240);
  // for (let i = 0; i < total; i++) {
  //   randomCounts[i] = 0;
  // }
}

function draw() {
  // walker v1
  walker.step();
  walker.show();

  // // random-number distribution
  // background(255);
  // let index = floor(random(randomCounts.length));
  // randomCounts[index]++;
  // stroke(0);
  // const w = width / randomCounts.length;
  // for (let x = 0; x < randomCounts.length; x++) {
  //   fill(25 + x * 10, 50, 100);
  //   rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  // }
}
