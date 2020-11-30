function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(random(0,255),0,0);
  fill(0,0,random(0,255));
  ellipse (mouseX,mouseY,50);
  stroke(0,255,0);
  fill(random(0,255),0,0)
  arc(mouseX, mouseY,50,50);  
 }
