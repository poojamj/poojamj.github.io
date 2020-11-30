function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {

  if (mouseIsPressed) {
    translate(mouseX / 4, mouseY / 4);
    shearX(PI / 4.0);
    rotateX(frameCount * 0.5);
    rotateY(frameCount * 0.5);
    cylinder(20, 50);
    
    fill(0, 0,150);
  } else {
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cylinder(20, 50);
    fill(150, 0, 0);

  }


}