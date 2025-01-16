// // v1 - no vectors
// let x = 100;
// let y = 100;
// let xspeed = 2.5;
// let yspeed = 2;

// function setup() {
//   createCanvas(640, 240);
// }

// function draw() {
//   background(200);

//   x += xspeed;
//   y += yspeed;

//   if (x > width - 20 || x < 0 + 20) {
//     xspeed *= -1;
//   }

//   if (y > height - 20 || y < 0 + 20) {
//     yspeed *= -1;
//   }

//   stroke(0);
//   fill(127);
//   circle(x, y, 40);
// }

// v2 vectors
/** @type Vector */
let position;
/** @type Vector */
let velocity;

const radius = 20;

function setup() {
  createCanvas(640, 240);
  position = createVector(100, 100);
  velocity = createVector(2.5, 2);
}

function draw() {
  background(200);

  position.add(velocity);

  if (position.x > width - radius || position.x < 0 + 20) {
    velocity.x *= -1;
  }

  if (position.y > height - radius || position.y < 0 + 20) {
    velocity.y *= -1;
  }

  stroke(0);
  fill(127);
  circle(position.x, position.y, radius * 2);
}
