function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  background(255);
}

function draw() {
  // Draw a pixel at the mouse position
  if (mouseIsPressed) {
    let r = random(255);
  let g = random(255);
  let b = random(255);

  // Set the fill color to the random color
  fill(r, g, b);

  // Draw a small square at the mouse position
  rect(mouseX, mouseY, 10, 10);
    
     
    loadPixels();
    let index = (mouseX + mouseY * width) * 4;
    pixels[index] = 0; // Red value
    pixels[index + 1] = 0; // Green value
    pixels[index + 2] = 0; // Blue value
    pixels[index + 3] = 255; // Alpha value
    updatePixels();
  }
}
