var m,h,s;
var scangle,mangle,hrangle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  
  translate(400,200)
  rotate (-90)
  h = hour()
  m = minute()
  s = second()
  scangle = map(s,0,60,0,360)
  mangle = map (m,0,60,0,360)
  hrangle = map (h%12,0,12,0,360)  
  push()
 rotate(scangle)
 stroke(255,0,0)
 strokeWeight(7)
 line (0,0,100,0)
  pop()
  push()
 rotate(mangle)
 stroke(0,255,0)
 strokeWeight(7)
 line (0,0,125,0)
  pop()
  push()
 rotate(hrangle)
 stroke(0,0,255)
 strokeWeight(7)
 line (0,0,150,0)
  pop()
}