let xpos = 200;
let ypos = 200;
let dx = 8;
let dy = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('white');
  rect(10, ypos, 10, 80);
  rect(width - 20, mouseY, 10, 80);
  ellipse(xpos, ypos, 20, 20);
  
  if (xpos >= width - 20 || xpos <= 20) {
    dx = -dx;
  }
  
  if (ypos >= height - 20 || ypos <= 20) {
    dy = -dy;
  }
  
  fill('black');
  textSize(32);
  text('PONG GAME', width - 200, height - 20);
  
  for (let i = 0; i < height; i += 20) {
    line(width / 2, i, width / 2, i + 10);
  }
  
  xpos = xpos + dx;
  ypos = ypos + dy;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}