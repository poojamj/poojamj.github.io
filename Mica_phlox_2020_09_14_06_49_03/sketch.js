function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(220);
  //box(mouseX, mouseY,50,50);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1); 
  
 
  if (mouseIsPressed){
  box(100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(102,0,0);
   }
  else 
  {box(50);
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5); 
  fill(0,150,0);
   }
  
}