class Wing {
  constructor(centerX, centerY, angle, length, color) {
    this.centerPosition = createVector(centerX, centerY);
    this.angle = angle;
    this.length = length;
    this.mass = this.length * 0.005;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.dragForce = createVector(0, 0);
    this.color = color;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  // calculateInducedDrag(lift) {
  //   const lidConstant = 0.1;
  //   const liftInducedDragMag =
  //     (lidConstant * (lift.mag() * lift.mag())) /
  //     (this.velocity.mag() * this.velocity.mag() * this.length * this.length);
  //   // should it be horizontal or vertical velocity? or just magnitude?
  //   // same question for lift
  //   // direction??? opposite to lift?
  //   // console.log(liftInducedDragMag);
  // }

  calculateDrag() {
    const dragCoefficient = 0.005;
    const dragForce = p5.Vector.mult(this.velocity, -1);
    const velocityMag = this.velocity.mag();
    const dragMag = velocityMag * velocityMag * dragCoefficient;
    dragForce.setMag(dragMag);
    dragForce.limit(velocityMag);
    return dragForce;
  }

  calculateLiftCoefficient() {
    const C_L0 = 0.05; // Lift coefficient at 0 degrees (or radians)
    const k = 0.1; // Rate of increase of C_L with angle of attack
    const C_Lmax = 1.5; // Maximum lift coefficient (at the critical angle)
    const stallAngle = Math.PI / 4; // Critical angle (45 degrees in radians)

    if (this.angle < stallAngle) {
      // Linear increase of C_L up to the stall angle
      return C_L0 + k * this.angle;
    } else {
      // Saturate at max C_L after the stall angle
      return C_Lmax;
    }
  }

  calculateLift() {
    const liftConstant = 0.05;
    const liftCoefficient = this.calculateLiftCoefficient();
    const liftMag =
      liftConstant *
      this.velocity.x *
      this.velocity.x *
      (this.length * 0.01) *
      liftCoefficient;
    // interestingly, the lift direction tilts forward as the wing tilts up
    const lift = createVector(
      liftMag * sin(this.angle),
      liftMag * cos(this.angle) * -1 // revert because p5 coordinate system is zero at top left
    );
    return lift;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.centerPosition.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    push();
    translate(this.centerPosition.x, this.centerPosition.y);
    rotate(this.angle);
    stroke(0);
    fill(this.color);
    rect(0 - this.length / 2, 0, this.length, 5);
    pop();
  }
}

let wing1, wing2, wing3, wing4, wing5, wing6;

function setup() {
  createCanvas(1280, 640);
  wing1 = new Wing(width - 50, height - 50, PI / 8, 100, "red");
  wing2 = new Wing(width - 50, height - 50, PI / 8, 150, "green");
  wing3 = new Wing(width - 50, height - 50, PI / 8, 200, "blue");
  wing4 = new Wing(width - 50, height - 50, PI / 16, 100, "yellow");
  wing5 = new Wing(width - 50, height - 50, PI / 32, 100, "purple");
  wing6 = new Wing(width - 50, height - 50, 0, 100, "cyan");
}

function draw() {
  background(200);
  const thrust = createVector(-0.005, 0);
  const gravity = createVector(0, 0.001);

  for (const wing of [wing1, wing2, wing3, wing4, wing5, wing6]) {
    wing.applyForce(thrust);
    const lift = wing.calculateLift();
    wing.applyForce(lift);

    const drag = wing.calculateDrag();
    wing.applyForce(drag); // this now includes horizontal and vertical drag, which means lift-induced drag is included?

    // wing.calculateInducedDrag(lift);

    const wingGravity = p5.Vector.mult(gravity, wing.mass);
    wing.applyForce(wingGravity);

    wing.update();
    wing.show();
  }
}
