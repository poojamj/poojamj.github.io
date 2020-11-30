

function setup() {
  createCanvas(800, 800);
 }
  


function draw() {
  //background(255);
  pattern(0);
  pattern(frameCount*2);
  stroke(random(0,200));
  noFill();
  
  for (var a=-200; a < 800; a=a+25) {
    for (var b=-200; b < 800; b=b+25) {
      
    ellipse(a,b,25,25);}

 }

function pattern(angle) {
  push(); 
  stroke(0,100,random(0,200));
  strokeWeight(1);
  noFill();
  translate(100, 100);     
  rotate(radians(angle))  
  for(var x=-100 ; x<200 ; x=x+1);
  for(var y=-100 ; y<200 ; y=y+1);
 {  for (var a=-200; a < 800; a=a+25) {
    for (var b=-200; b < 800; b=b+25) {
      
    ellipse(a,b,25,25);}

 }
 }
  
  pop(); }
  
    
   
}




