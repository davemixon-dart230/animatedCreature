let yPos = 0; // Frog's movement
let angle = 0; // Movement angle

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  // Sky
  for (let i = 0; i < height / 2; i++) {
    let inter = map(i, 0, height / 2, 0, 1);
    let c = lerpColor(color(255, 102, 102), color(135, 206, 235), inter);
    stroke(c);
    line(0, i, width, i);
  }
  
  // Land
  fill(85, 107, 47);
  rect(0, height * 0.65, width, height * 0.35);

  // Sun
  fill(255, 140, 0);
  arc(width / 2, height * 0.65, 150, 150, PI, TWO_PI);
  
  fill(255, 223, 0);
  arc(width / 2, height * 0.65, 120, 120, PI, TWO_PI);

  // River
  fill(173, 216, 230);
  beginShape();
  vertex(50, height * 0.65 + 50);
  vertex(350, height * 0.65 + 50);
  vertex(250, height * 0.65);
  vertex(150, height * 0.65);
  endShape(CLOSE);

  // Frog's movement
  yPos = sin(angle) * 5;
  angle += 0.05;

  // Lily pad
  fill(34, 139, 34);
  ellipse(width / 2, 300, 120, 50);
  fill(85, 107, 47);
  arc(width / 2, 300, 120, 50, QUARTER_PI, HALF_PI + PI);

  // Frog's body
  fill(0, 100, 0);
  ellipse(width / 2, 250 + yPos, 70, 50);

  // Frog's head
  ellipse(width / 2, 210 + yPos, 60, 50);
  
  // Frog's eyes
  fill(255);
  ellipse(width / 2 - 20, 200 + yPos, 20, 20);
  ellipse(width / 2 + 20, 200 + yPos, 20, 20);

  fill(0);
  ellipse(width / 2 - 20, 200 + yPos, 10, 10);
  ellipse(width / 2 + 20, 200 + yPos, 10, 10);
  
  // Frog's legs
  fill(0, 100, 0);
  ellipse(width / 2 - 15, 260 + yPos, 10, 30);
  ellipse(width / 2 + 15, 260 + yPos, 10, 30);
  ellipse(width / 2 - 30, 285 + yPos, 15, 40);
  ellipse(width / 2 + 30, 285 + yPos, 15, 40);

  // Frog's feet
  ellipse(width / 2 - 40, 300 + yPos, 25, 10);
  ellipse(width / 2 + 40, 300 + yPos, 25, 10);
  
  // Frog's mouth
  fill(0);
  arc(width / 2, 220 + yPos, 30, 20, 0, PI);
  
  // Water ripple
  noFill();
  stroke(173, 216, 230);
  strokeWeight(2);
  ellipse(width / 2, 310, 140, 60);
  ellipse(width / 2, 315, 160, 70);
}
