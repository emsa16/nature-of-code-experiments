// let balloon;
let gravity;
let liquid;
const movers = [];

function setup() {
  createCanvas(640, 640);
  // balloon = new Balloon();
  const moverA = new Mover(1, width / 2, 30, 0.1);
  movers.push(moverA);
  const moverB = new Mover(3, 500, 150, 2);
  movers.push(moverB);
  const moverC = new Mover(3, 100, 0, 2);
  movers.push(moverC);

  const squareMover = new SquareMover(30, 200, 100, 0.1);
  movers.push(squareMover);
  const squareMoverB = new SquareMover(70, 400, 100, 0.1);
  movers.push(squareMoverB);

  gravity = createVector(0, 0.1);
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(200);
  // balloon.update();
  // balloon.show();

  liquid.show();

  let wind;
  // let toss;

  if (mouseIsPressed) {
    // v1
    // wind = createVector(0.1, 0);

    // v2
    wind = createVector(mouseX, mouseY);
    const center = createVector(width / 2, height / 2);
    wind.sub(center);
    wind.mult(-1);
    wind.setMag(0.1);

    // // v3 tossing the mover
    // toss = createVector(mouseX, mouseY);
    // toss.sub(moverA.position);
    // toss.mult(-1);
    // toss.setMag(4);
  }

  for (const mover of movers) {
    if (mouseIsPressed) {
      // v1
      // mover.applyForce(wind);

      // v2
      mover.applyForce(wind);

      // // v3 tossing the mover
      // mover.velocity = toss;
    }

    const moverGravity = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(moverGravity);
    // const wallForce = calculateWallForce(mover);
    // mover.applyForce(wallForce);
    mover.applyFriction();
    if (liquid.contains(mover)) {
      mover.applyDrag(liquid.c);
    }
    mover.update();
    mover.show();
    mover.checkEdges();
  }
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
