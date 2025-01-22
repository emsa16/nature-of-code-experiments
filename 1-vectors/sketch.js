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

// // v2 vectors
// /** @type Vector */
// let position;
// /** @type Vector */
// let velocity;

// const radius = 20;

// function setup() {
//   createCanvas(640, 240);
//   position = createVector(100, 100);
//   velocity = createVector(2.5, 2);
// }

// function draw() {
//   background(200);

//   position.add(velocity);

//   if (position.x >= width - radius || position.x <= radius) {
//     velocity.x *= -1;
//   }

//   if (position.y >= height - radius || position.y <= radius) {
//     velocity.y *= -1;
//   }

//   stroke(0);
//   fill(127);
//   circle(position.x, position.y, radius * 2);
// }

// // v3 walker using vectors
// let walker;

// function setup() {
//   createCanvas(640, 240);
//   background(200);
//   walker = new Walker();
// }

// function draw() {
//   walker.step();
//   walker.show();
// }

// // v4 bouncing ball 3d
// /** @type Vector */
// let position;
// /** @type Vector */
// let velocity;

// const radius = 20;
// const boxHeight = 270;
// const boxWidth = 270;
// const boxDepth = 270;

// function setup() {
//   createCanvas(600, 600, WEBGL);
//   position = createVector(40, 40, 40);
//   velocity = createVector(2.5, 2, 4);
// }

// function draw() {
//   background(200);

//   position.add(velocity);

//   if (
//     position.x >= boxWidth / 2 - radius ||
//     position.x <= -(boxWidth / 2) + radius
//   ) {
//     velocity.x *= -1;
//   }

//   if (
//     position.y >= boxHeight / 2 - radius ||
//     position.y <= -(boxHeight / 2) + radius
//   ) {
//     velocity.y *= -1;
//   }

//   if (
//     position.z >= boxDepth / 2 - radius ||
//     position.z <= -(boxDepth / 2) + radius
//   ) {
//     velocity.z *= -1;
//   }

//   // Sphere
//   push();
//   translate(position.x, position.y, position.z);
//   rotateY(25);
//   rotateZ(35);
//   stroke(150, 0, 0);
//   fill(255, 0, 0);
//   sphere(radius);
//   pop();

//   // Box
//   push();
//   translate(0, 0, -50);
//   rotateY(25);
//   rotateZ(35);
//   noFill();
//   box(270, 270, 270);
//   pop();
// }
