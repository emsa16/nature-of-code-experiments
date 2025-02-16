// let balloon;
let moverA;
let moverB;
let gravity;

function setup() {
  createCanvas(640, 640);
  // balloon = new Balloon();
  moverA = new Mover(1, width / 2, 30, 0.1);
  moverB = new Mover(3, 500, 100, 2);

  gravity = createVector(0, 0.1);
}

function draw() {
  background(200);
  // balloon.update();
  // balloon.show();

  if (mouseIsPressed) {
    // v1
    // const wind = createVector(0.1, 0);
    // moverA.applyForce(wind);
    // moverB.applyForce(wind);

    // v2
    const wind = createVector(mouseX, mouseY);
    const center = createVector(width / 2, height / 2);
    wind.sub(center);
    wind.mult(-1);
    wind.setMag(0.1);
    moverA.applyForce(wind);
    moverB.applyForce(wind);

    // // v3 tossing the mover
    // const toss = createVector(mouseX, mouseY);
    // toss.sub(moverA.position);
    // toss.mult(-1);
    // toss.setMag(4);
    // moverA.velocity = toss;
  }

  const gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);
  // const wallForceA = calculateWallForce(moverA);
  // moverA.applyForce(wallForceA);
  moverA.applyFriction();
  moverA.update();
  moverA.show();
  moverA.checkEdges();

  const gravityB = p5.Vector.mult(gravity, moverB.mass);
  moverB.applyForce(gravityB);
  // const wallForceB = calculateWallForce(moverB);
  // moverB.applyForce(wallForceB);
  moverB.applyFriction();
  moverB.update();
  moverB.show();
  moverB.checkEdges();
}

// function calculateWallForce(mover) {
//   const distanceToRightWall = width - mover.position.x + mover.radius;
//   const distanceToLeftWall = mover.position.x - mover.radius;
//   const distanceToTopWall = mover.position.y - mover.radius;
//   const distanceToDownWall = height - mover.position.y + mover.radius;

//   const rightWallForce = createVector((-1 / distanceToRightWall) * 50, 0);
//   const leftWallForce = createVector((1 / distanceToLeftWall) * 50, 0);
//   const topWallForce = createVector(0, (1 / distanceToTopWall) * 50);
//   const downWallForce = createVector(0, (-1 / distanceToDownWall) * 50);

//   const wallForce = createVector(0, 0);

//   wallForce
//     .add(rightWallForce)
//     .add(leftWallForce)
//     .add(topWallForce)
//     .add(downWallForce);
//   return wallForce;
// }
