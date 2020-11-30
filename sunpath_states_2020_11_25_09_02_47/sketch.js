var state = "morning";
var sunposX = 50;
var sunposY = 800;
var speedX = 0;
var speedY = 0;
var moonY = 700;
var moonYspeed = 0;
let timer = 0;

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background("skyblue");
  stroke("black");
  strokeWeight(1);
  fill("green");
  arc(400, 800, 800, 400, PI, 0);

  push();
  fill("yellow");
  ellipse(25, 800, 50, 50, 25);
  pop();

  if (state == "morning") {
    sunposY = sunposY - speedY;
    speedY = speedY + 0.05;

    if (sunposY < 300) {
      state = "noon";
    }
  } else if (state == "noon") {
    sunposX = sunposX + speedX;
    speedX = speedX + 0.05;

    if (sunposX > 750) {
      state = "evening";
    }
  } else if (state == "evening") {
    sunposY = sunposY + speedY;
    speedY = speedY + 0.01;

    if (sunposY > 800) {
      state = "night";
    }
  } else if (state == "night") {
    background("navy");

    moonY = moonY + moonYspeed;
    moonYspeed = moonYspeed - 0.1;
    noFill();
    stroke("white");
    strokeWeight(10);
    arc(100, moonY, 50, 50, 0, HALF_PI);
    arc(100, moonY, 100, 50, 0, HALF_PI);
    arc(100, moonY, 50, 50, -HALF_PI, 0);
    arc(100, moonY, 100, 50, -HALF_PI, 0);

  }
  if (moonY < 150) {

    moonYspeed = moonYspeed * 0;
    state = "finished"
  }


  if (state == "finished") {
    fill("white")
    ellipse(700, 100, 50, 50);
  }

  let d = dist(mouseX, mouseY, 700, 100);
  if (mouseIsPressed && d < 25) {
    state = "morning";
    sunposX = 50;
    sunposY = 800;
    speedX = 0;
    speedY = 0;
    moonY = 700;
    moonYspeed = 0;
  }

  fill("yellow");
  ellipse(sunposX, sunposY, 75, 75, 25);

  stroke("black");
  strokeWeight(1);
  fill("green");
  arc(400, 800, 800, 400, PI, 0);

}