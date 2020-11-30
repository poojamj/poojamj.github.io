function setup() {
  createCanvas(800, 800);
  createLoop({duration :3, gif: {download: true}});
}

function draw() {
  //background(255);
  pattern(0);
  pattern(frameCount*2);
}

function pattern(angle) {
  push(0);
  fill(200,255,random(200,255));
  translate(400,400);
  rotate(radians(-(angle)*5));
  for(var x=-200 ; x<300 ; x=x+1);
  for(var y=-200 ; y<300 ; y=y+1);
 {ellipse(x,y,x+10,y+10);
  ellipse(x+10,y+10,x+20,y+20);
  ellipse(x+20,y+20,x+30,y+30); 
  ellipse(x+30,y+30,x+40,y+40);
 }
  pop(0);
}