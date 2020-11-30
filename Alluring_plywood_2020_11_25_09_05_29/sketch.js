var x = [];
var y = [];
var size = [];

function setup() {
  createCanvas(800, 800);
  max_distance = dist(0,0,width,height);
}

function draw() {
  //background(220);
  
  if(mouseIsPressed){
    x.push(mouseX);
    y.push(mouseY);
     
}
  for (var i=0; i<x.length; i=i+1) {
  fill(random(1,200),0,0);
  rect(x[i],y[i],40,40,4);
    
    var dx = mouseX-x[i];
    var dy = mouseY-y[i];
    
    x[i] = x[i] + dx/100;
  y[i] = y[i] + dy/100;
  }  

  if(keyIsPressed){
    x.pop(mouseX);
    y.pop(mouseY);
  }
  
}