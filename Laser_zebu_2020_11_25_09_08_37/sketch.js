// noprotect
var img1;
var size;
var startRow;
var whichImage;

function preload() {
  img1 = loadImage("unsplash.jpg");
}

function setup() {
  createCanvas(800, 1200);
  imageMode(CENTER);
  size = 5;
  startRow = 0;
  whichImage = 1;
}

function draw()

{
  background(0);
  for (var x = size; x < width; x = x + size * 1.666) {
    for (var y = size + startRow * random(1, 100); y < height; y = y + size) {
      var c;
      if (whichImage == 1) {
        c = img1.get(x, y);
      }
      fill(c);
      ellipse(x + random(1, 100), y + random(1, 100), size * 2, size * 2);
    }
  }

  startRow = startRow + 1;
  if (startRow > height / (size)) {
    startRow = 0;
    whichImage = whichImage * -1;
    size = random(5, 50);
  }
}