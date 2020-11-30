function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {

  if (mouseIsPressed) {
    translate(mouseX - 20, mouseY - 50);
    shearX(PI / 4.0);
    rotateX(frameCount * 0.5);
    rotateY(frameCount * 0.5);
    cylinder(20, 50);

    fill(100, 100, random(0, 150));
  } else {
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    fill(150, 0, 0);
    cylinder(20, 50);


  }


}