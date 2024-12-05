let yPos = 0; // Variable for frog's idle movement (up and down)
let angle = 0; // Angle for smooth sinusoidal movement

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  // Sky gradient for sunrise (top half)
  for (let i = 0; i < height / 2; i++) {
    let inter = map(i, 0, height / 2, 0, 1);
    let c = lerpColor(color(255, 102, 102), color(135, 206, 235), inter); // Transition from light pink to sky blue
    stroke(c);
    line(0, i, width, i);
  }
  
  // Land (lower section with shorter height)
  fill(85, 107, 47); // Green color for land
  rect(0, height * 0.65, width, height * 0.35); // Adjusted height of the land (shorter)

  // Sun (sunrise) with two layers, made larger
  fill(255, 140, 0); // Orange for outer sun layer
  arc(width / 2, height * 0.65, 150, 150, PI, TWO_PI); // Larger outer orange layer (half circle)
  
  fill(255, 223, 0); // Yellow for inner sun layer
  arc(width / 2, height * 0.65, 120, 120, PI, TWO_PI); // Larger inner yellow layer

  // River (trapezoid shape, stops at the end of land layer)
  fill(173, 216, 230); // Light blue for water
  beginShape();
  vertex(50, height * 0.65 + 50); // Left side of the river at the bottom of the land layer
  vertex(350, height * 0.65 + 50); // Right side of the river
  vertex(250, height * 0.65); // Right converging point near the land's horizon
  vertex(150, height * 0.65); // Left converging point near the land's horizon
  endShape(CLOSE); // Trapezoid shape for perspective

  // Adjust the yPos for frog's idle movement (sinusoidal up and down motion)
  yPos = sin(angle) * 5; // Up and down movement based on sine wave
  angle += 0.05; // Increment angle for smooth movement

  // Lily pad (stays still)
  fill(34, 139, 34); // Green for lily pad
  ellipse(width / 2, 300, 120, 50); // Main pad body
  fill(85, 107, 47); // Darker green for bite mark
  arc(width / 2, 300, 120, 50, QUARTER_PI, HALF_PI + PI); // Bite mark

  // Frog's body (torso)
  fill(0, 100, 0); // Dark green for frog's body
  ellipse(width / 2, 250 + yPos, 70, 50); // Body (torso) moving up and down

  // Frog's head
  ellipse(width / 2, 210 + yPos, 60, 50); // Head
  
  // Frog's eyes
  fill(255); // White for eyes
  ellipse(width / 2 - 20, 200 + yPos, 20, 20); // Left eye
  ellipse(width / 2 + 20, 200 + yPos, 20, 20); // Right eye

  fill(0); // Black for pupils
  ellipse(width / 2 - 20, 200 + yPos, 10, 10); // Left pupil
  ellipse(width / 2 + 20, 200 + yPos, 10, 10); // Right pupil
  
  // Frog's legs (four-legged stance)
  
  // Front legs (closer to the middle)
  fill(0, 100, 0); // Dark green for legs
  ellipse(width / 2 - 15, 260 + yPos, 10, 30); // Left front leg
  ellipse(width / 2 + 15, 260 + yPos, 10, 30); // Right front leg

  // Back legs (spread out more to the sides)
  ellipse(width / 2 - 30, 285 + yPos, 15, 40); // Left back leg
  ellipse(width / 2 + 30, 285 + yPos, 15, 40); // Right back leg

  // Frog's feet
  ellipse(width / 2 - 40, 300 + yPos, 25, 10); // Left foot
  ellipse(width / 2 + 40, 300 + yPos, 25, 10); // Right foot
  
  // Frog's mouth
  fill(0); // Black for the mouth
  arc(width / 2, 220 + yPos, 30, 20, 0, PI); // Smile
  
  // Water ripple effect around the lily pad (stationary)
  noFill();
  stroke(173, 216, 230); // Light blue for water ripple
  strokeWeight(2);
  ellipse(width / 2, 310, 140, 60); // Ripple 1
  ellipse(width / 2, 315, 160, 70); // Ripple 2
}
