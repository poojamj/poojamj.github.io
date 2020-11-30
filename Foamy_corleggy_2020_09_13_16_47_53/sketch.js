var angle = 0;
var mulX = 30;
var mulY = 120;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  //background(220);
  
  angle = angle + radians(120/10);
  
 //mulX = mulY + random(-1, 10);
  mulY = mulY + random(-1, 1);
  
  var x = 100+sin(angle)*mulX;
  var y = 200+cos(angle)*mulY;
  
  fill(random(1,200),0,150)
  
  quad(x, y+50, x+50, y, x,y+75, x+100, y);
  
   angle = angle + radians(120/10);
  
 mulX = mulY + random(-1, 10);
  //mulY = mulY + random(-1, 1);
  
 var x = 150+sin(angle)*mulX;
 var y = 300+cos(angle)*mulY;
  
  fill(0,random(1,255),0)
  
  quad(x+50, y, x, y+50, x+100,y, x, y+100);
}
