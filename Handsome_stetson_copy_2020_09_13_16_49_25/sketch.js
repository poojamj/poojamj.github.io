var centerX;
var centerY;
var speedX;
var speedY;
var angle = 0;
var mulX = 60;
var mulY = 60;

function setup() {
  createCanvas(400, 400);
  centerX = 200;
  centerY = 200;
  speedX = 5;
  speedY = 0;
}

function draw() {
  //background(220);
  
  //speedY = speedY + 0.1;
  //speedX = speedX + 0.1;
  
  //centerX = centerX + speedX;
  //centerY = centerY + speedY;
  
  //if (centerX>500) {centerX = -100};
  //if (speedX<5){speedX = speedX + 0.1}
  //if (centerY > 350) { centerY = -100};
  
  
    
  //ellipse(centerX,centerY,100,100)
  
  angle = angle + radians(90/10);
  
  mulX = mulY + random(-1, 10);
  mulY = mulY + random(-1, 0);
  
  var x = 200+sin(angle)*mulX;
  var y = 200+cos(angle)*mulY;
  
  fill(102,random(1,255),150)
  
  quad(x, y, x, y+10, x+7.5,y, x+7.5, y+10);
  
  
}
