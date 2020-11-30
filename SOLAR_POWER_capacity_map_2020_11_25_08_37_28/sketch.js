let zipX;
let zipY;
let capacity = 0;
let zipTable;
let solarTable;
let bounds = {
  "minLon": -119.1,
  "maxLon": -117.3,
  "maxLat": 34.86,
  "minLat": 33.28
};
let dimensions = {
  width: 512,
  height: 539
};

let maxCapacity = 15;
  


function getXY(lat, lng) {
  let screenX = map(lng, bounds.minLon, bounds.maxLon, 0, dimensions.width);
  let screenY = map(lat, bounds.minLat, bounds.maxLat, dimensions.height, 0);
  return {
    screenX,
    screenY
  };
}

function preload() {
  baseMap = loadImage("lamap.png");
  zipTable = loadTable("CALIFORNIA ZIP CODES.csv", "csv", "header");
  solarTable = loadTable("2020 data.csv", "csv", "header");
}

function setup() {
  
  createCanvas(dimensions.width, dimensions.height);

  // just a test
  //let latlong = latLongFromZip(90019);
  // print(latlong);
}

function draw() {
  
  


  // background(220);
  //imageMode(CENTER);
  image(baseMap, 0, 0);
  for (let row = 0; row < solarTable.getRowCount(); row++) {

    let latLongObj = latLongFromZip(solarTable.getNum(row, "ZIPCODE"));

    let capacity = solarTable.getNum(row, "CAPACITY");

    let XY = getXY(latLongObj.lat, latLongObj.long);
    noStroke();
colorMode(HSB,360,100,100,1);

    if (capacity > 15) {
      capacity = maxCapacity;
      fill(7,74,51)
    } else if (capacity < 5) {
      fill(57,59,86)
    } else if (5 < capacity < 10) {
      fill(22,76,86)
    }
    ellipse(XY.screenX, XY.screenY, capacity);
    
  textSize(12);
  fill(7,74,31);
  text('Solar Capacity (KW) - 2020', dimensions.width/2-20,dimensions.height-10);
    
  }
}

function latLongFromZip(zip) {
  for (let row = 0; row < zipTable.getRowCount(); row++) {
    if (zip == zipTable.getNum(row, "Zip")) {
      return {
        lat: zipTable.getNum(row, "Latitude"),
        long: zipTable.getNum(row, "Longitude")
      };
    }
  }
  //print("Missing Zip code: " + zip);
  return {
    lat: 0,
    long: 0
  };
}