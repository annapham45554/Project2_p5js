let bamboo = [];
let bambooWidth = 20;
let bambooHeight = 70;
let bambooX;
let bambooY;

let speed = 2;
let direction = 1;
let greenValue = 40; // Initial green value
let backgroundColor = 210; // Initial background color (changed to gray)

let sunColor = 255; // Sun color (changed to yellow)
let moonColor = 500; // Moon color (changed to white)

function setup() {
  createCanvas(2000, 700);
  bambooX = width / 3 - bambooWidth / 2; // Place bamboo near the bottom
  bambooY = height - bambooHeight;
}

function draw() {
  background(backgroundColor); // Changed background color to gray/black

  fill(0, greenValue, 0); // Change bamboo color gradually
  
  // Draw bamboo (ChatGPT4)
  for (let i = 0; i < bamboo.length; i++) {
    rect(bambooX, bambooY - i * bambooWidth, bambooWidth, bambooWidth);
  }
  
  // Draw sun and moon 
  if (backgroundColor > 100) {
    // Draw sun
    fill(sunColor, sunColor, 0); // Changed sun color to yellow
    ellipse(350, 100, 50, 50);
  } else {
    // Draw moon
    fill(moonColor); // Changed moon color to white
    ellipse(950, 100, 50, 50);
  }
}

function mouseClicked() {
  // Add a new rectangle to the bamboo 
  if (bamboo.length < 27) { // Limit growth to 27 rectangles (ChatGPT4)
    bamboo.push(1);
    greenValue += 10; // Gradually change color towards light green 
  }
}

function mouseMoved() {
  // Change background color from gray to black when mouse hovers inside canvas (ChatGPT4)
  if (bamboo.length >= 27 && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    backgroundColor -= 5; // Adjust the value for the speed of color change
    sunColor -= 5;
    moonColor -= 3;
  }
}