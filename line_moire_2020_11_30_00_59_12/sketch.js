

function setup() {
  createCanvas(400, 400);
  createLoop({duration:3, gif: {download: true}});
 }
  


function draw() {
  background(255);
  pattern(0);
  pattern(frameCount/20);
 }

function pattern(angle) {
  push(); 
  stroke(0,0,random(0,200));
  strokeWeight(random(1,10));
  translate(25, 25);     
  rotate(radians(angle))  
  for (var a=-300; a < 300; a=a+25) {
    for (var b=-300; b < 300; b=b+25) {
      
    line(a,b,a+100,b+100);
    //line(x+100,y+100,x,y);
    }
  }
  pop();                    
}
