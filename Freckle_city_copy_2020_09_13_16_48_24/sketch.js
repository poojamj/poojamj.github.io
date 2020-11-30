var centerX 
var centerY 
var speed 
var angle =0;
var mulX =60;
var mulY =90;


function setup() {
  createCanvas(400, 400);
  centerX = 200;
  centerY = 200;
  speedX = 5
  speedY = 10;
}

function draw() {
  //background(220);
  centerY = centerY + speedY;
  centerX = centerX + speedX;
  speedY = speedY + 0.1;
  
  if(centerY > 350) {speedY = speedY *-0.96;}
  
  if (centerX>500) {centerX = -100;}
  
  stroke(0,0,0)
  fill(random(1,200),0,0)
  ellipse(centerX, centerY, 100,100)
  
  angle = angle + radians(90/10);
  
  mulX = mulY + random(-1, 0);
  mulY = mulY + random(-1, 1);
  
  var x = 200+sin(angle)*mulX;
  var y = 200+cos(angle)*mulY;
  
  fill(102,random(1,255),150)
  
  quad(x, y, x, y+50, x+75,y, x+75, y+50);
    
}




