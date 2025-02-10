// let balloon;
let moverA;
let moverB;

function setup() {
  createCanvas(640, 640);
  // balloon = new Balloon();
  moverA = new Mover(1, width / 2, 30);
  moverB = new Mover(3, 500, 100);
}

function draw() {
  background(200);
  // balloon.update();
  // balloon.show();
  const gravity = createVector(0, 0.1);

  if (mouseIsPressed) {
    // v1
    // const wind = createVector(0.1, 0);
    // moverA.applyForce(wind);
    // moverB.applyForce(wind);

    // v2
    const mouse = createVector(mouseX, mouseY);
    const center = createVector(width / 2, height / 2);
    mouse.sub(center);
    mouse.mult(-1);
    mouse.setMag(0.1);
    moverA.applyForce(mouse);
    moverB.applyForce(mouse);
  }

  const gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);
  const wallForceA = calculateWallForce(moverA);
  moverA.applyForce(wallForceA);
  moverA.update();
  moverA.show();
  // moverA.checkEdges();

  const gravityB = p5.Vector.mult(gravity, moverB.mass);
  const wallForceB = calculateWallForce(moverB);
  moverB.applyForce(wallForceB);
  moverB.applyForce(gravityB);
  moverB.update();
  moverB.show();
  // moverB.checkEdges();
}

function calculateWallForce(mover) {
  const distanceToRightWall = width - mover.position.x + mover.radius;
  const distanceToLeftWall = mover.position.x - mover.radius;
  const distanceToTopWall = mover.position.y - mover.radius;
  const distanceToDownWall = height - mover.position.y + mover.radius;

  const rightWallForce = createVector((-1 / distanceToRightWall) * 50, 0);
  const leftWallForce = createVector((1 / distanceToLeftWall) * 50, 0);
  const topWallForce = createVector(0, (1 / distanceToTopWall) * 50);
  const downWallForce = createVector(0, (-1 / distanceToDownWall) * 50);

  const wallForce = createVector(0, 0);

  wallForce
    .add(rightWallForce)
    .add(leftWallForce)
    .add(topWallForce)
    .add(downWallForce);
  return wallForce;
}
