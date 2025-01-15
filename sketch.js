let walker;

let randomCounts = [];

let total = 20;

let xoffset = 0;

function setup() {
  // walker v1
  createCanvas(400, 400);
  walker = new Walker();
  background(225);

  // // random-number distribution + custom distribution
  // createCanvas(640, 240);
  // for (let i = 0; i < total; i++) {
  //   randomCounts[i] = 0;
  // }

  pixelDensity(1);
  // noiseDetail(30, 0.6);
  // noiseDetail(4, 0.5);

  // random pixel coloring
  randomPixelColoring();
}

function draw() {
  // walker v1
  // walker.step();
  // walker.show();
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
  // // gaussian distribution
  // const deviationFactor =
  //   document.getElementById("deviation-slider").value / 20;
  // const x = randomGaussian(200, 60 * deviationFactor);
  // const y = randomGaussian(200, 20 * deviationFactor);
  // const d = randomGaussian(4, 3 * deviationFactor);
  // const r = randomGaussian(240, 5 * deviationFactor);
  // const g = randomGaussian(40, 35 * deviationFactor);
  // const b = randomGaussian(55, 30 * deviationFactor);
  // const a = map(random(), 0, 1, 80, 225);
  // noStroke();
  // fill(r, g, b, a);
  // circle(x, y, d);
  // // accept-reject distribution
  // background(255);
  // let index = floor(acceptreject(randomCounts.length));
  // randomCounts[index]++;
  // stroke(0);
  // const w = width / randomCounts.length;
  // for (let x = 0; x < randomCounts.length; x++) {
  //   fill(25 + x * 10, 50, 100);
  //   rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  // }
  // animatedrandom pixel coloring
  // randomPixelColoring();
}

function acceptreject(max) {
  while (true) {
    const r1 = random(max);
    const probability = r1;
    const r2 = random(max);
    if (r2 < probability) {
      return r1;
    }
  }
}

function randomPixelColoring() {
  // // random pixel coloring
  // loadPixels();

  // for (let x = 0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     let index = (x + y * width) * 4;
  //     let bright = random(255);
  //     pixels[index] = bright;
  //     pixels[index + 1] = bright;
  //     pixels[index + 2] = bright;
  //     pixels[index + 3] = 255;
  //   }
  // }

  // updatePixels();

  // random pixel coloring - wood texture
  // loadPixels();

  // let xoff = 0.0;
  // for (let x = 0; x < width; x++) {
  //   let yoff = 0.0;
  //   for (let y = 0; y < height; y++) {
  //     let index = (x + y * width) * 4;
  //     let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
  //     // bright = max(bright, 10);
  //     // bright = min(bright, 230);
  //     bright = bright < 55 ? 0 : bright;
  //     pixels[index] = map(bright, 0, 255, 115, 195);
  //     pixels[index + 1] = map(bright, 0, 255, 50, 120);
  //     pixels[index + 2] = map(bright, 0, 255, 10, 50);
  //     pixels[index + 3] = 255;
  //     yoff += 0.0015;
  //   }
  //   xoff += 0.02;
  // }

  // updatePixels();

  // // animated noise
  // loadPixels();

  // let xoff = 0.0;
  // for (let x = 0; x < width; x++) {
  //   let yoff = 0.0;
  //   for (let y = 0; y < height; y++) {
  //     let index = (x + y * width) * 4;
  //     let bright = map(noise(xoff, yoff, xoffset), 0, 1, 0, 255);
  //     // bright = max(bright, 10);
  //     // bright = min(bright, 230);
  //     // bright = bright < 25 ? 0 : bright;
  //     pixels[index] = map(bright, 0, 255, 0, 55);
  //     pixels[index + 1] = map(bright, 0, 255, 0, 125);
  //     pixels[index + 2] = map(bright, 0, 255, 0, 50);
  //     pixels[index + 3] = 255;
  //     yoff += 0.0015;
  //   }
  //   xoff += 0.02;
  // }

  // updatePixels();

  // xoffset += 0.005;

  loadPixels();

  let xoff = 0.0;
  for (let x = 0; x < width; x++) {
    let yoff = 0.0;
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      // bright = max(bright, 10);
      // bright = min(bright, 230);
      bright = bright < 55 ? 0 : bright;
      pixels[index] = map(bright, 0, 255, 115, 195);
      pixels[index + 1] = map(bright, 0, 255, 50, 120);
      pixels[index + 2] = map(bright, 0, 255, 10, 50);
      pixels[index + 3] = 255;
      yoff += 0.0015;
    }
    xoff += 0.02;
  }

  updatePixels();
}
