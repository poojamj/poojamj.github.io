function setup() {
  createCanvas(400, 400);
}

function draw() {
 //background (255,0,0);
 line(mouseX, mouseY,20,20,100,100);
 strokeWeight(2);
 stroke(255,200,random(0,255));
}