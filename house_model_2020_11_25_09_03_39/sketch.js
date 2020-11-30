var bldgs = [];

function setup() {
  createCanvas(600, 600);
  bldgs.push(new Building(450, 450, 150, 150));
  bldgs.push(new Building(325, 450, 150, 150));
  bldgs.push(new Building(200, 450, 150, 150));
  bldgs.push(new Building(75, 450, 150, 150));
  background("darkblue");
}


function draw() {
  
  for (var i = 0; i < bldgs.length; i = i + 1) {
    bldgs[i].draw();
    bldgs[i].growRoof(0.1);
    
  }
}


function Building(initX, initY, initRoofHeight, initRoofLength) {
  this.x = initX;
  this.y = initY;
  this.roofHeight = initRoofHeight;
  this.rooflength = initRoofLength;
  this.draw = function() {

    
    push();
    translate(this.x, this.y);
    fill("pink");
    rect(0, 0, 100, 100);
    fill("lightyellow");
    rect(15, 15, 25, 25);
    rect(60, 15, 25, 25);
    rect(15, 60, 25, 25);
    rect(60, 60, 25, 25);
    
    fill("lightblue");
    quad(-50, -100, 0, 0, 0, 100, -50, 0);


    fill("brown");
    triangle(0, 0, 50, -1 * this.roofHeight, 100, 0);
    triangle(-50, -100, 50, -1 * this.roofHeight, 0, 0);
    //quad(-50, -100, 0, -150, 50, -1 * this.roofHeight, 0, 0);
    pop();
  }

  this.growRoof = function(howMuch) {
    this.roofHeight = this.roofHeight + howMuch;
  }
  
}
  this.collapse = function() {


}



