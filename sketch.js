let cellSize;
let minCircleDiameter;
let canvasWidth;
let canvasHeight;
let logotype;

function preload() {
  // Load logotype image
  logotype = loadImage("assets/logo.png");
}

function setup() {
  // Find cell size measure
  let logotypeWidth = logotype.width;
  cellSize = (logotypeWidth * 2) / 10;

  // Generate Canvas
  canvasWidth = cellSize * 11;
  canvasHeight = cellSize * 17;
  createCanvas(canvasWidth, canvasHeight);
  background(245, 244, 244);

  // Position logotype (as image)
  image(logotype, cellSize, cellSize * 13);

  // Define circles measures
  minCircleDiameter = logotypeWidth / 200;

  // Draw circles
  for (let i = 0; i < 10; i++) {
    // 10 rows
    for (let j = 0; j < 10; j++) {
      // 10 circles per row
      let diameter = random(minCircleDiameter * 0, minCircleDiameter * 9);
      let x = (j + 1) * cellSize;
      let y = (i + 1) * cellSize;
      if (
        x > diameter / 2 &&
        x < canvasWidth - diameter / 2 &&
        y > diameter / 2 &&
        y < canvasHeight - diameter / 2
      ) {
        fill(51, 51, 51); // logotype color
      } else {
        noFill(); // transparent
      }
      ellipse(x, y, diameter);
    }
  }
}
