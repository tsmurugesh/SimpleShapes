
let dragAmt = 200;
let value = 0;
var i;
var r;

// Setup code goes here
function setup() {
  createCanvas(1200, 800);

 }


// Draw code goes here
function draw() {
  // light pink bg
  background('#ffb2e0');
  myEye();
  myLine();
  myRect();
  myRectTwo();
  myArc();
  myDraggedEllipse();
  myQuad();
  myPoint();
  myTriangle();

}

// shapes 1 & 2; circle and a square
function myEye(){
  noStroke();	
  fill(255);
  ellipse (mouseX, mouseY, 100,100);
  fill('blue');
  rect (pmouseX+1, pmouseY+1, 20,20);

}

// shape 3, an arc
function myArc(){
	angleMode(RADIANS);
	noFill();
	stroke(0);
	strokeWeight(10);
	arc(600,700,300,100,0,PI);
}

// shape 4 made color changing triangle
function myTriangle(){
	noStroke();
  if (mouseX > 600 && mouseY < 400){
  	fill(2,20,20);
  }
  else if (mouseX > 600 && mouseY > 400){
  	fill(40,250,20);
  }
  else if (mouseX < 600 && mouseY > 400){
  	fill(200,250,60);
  }
  else{
  	fill(10,30,200);
  }
  triangle(500, 230, 370, 400, 550, 600);
}
// shape 5, inverse moving line
function myLine(){
	stroke(255);
	strokeWeight(1);
	line(0,0, mouseY,mouseX);
}

// shape 6, centered square that chnages to circle
function myRect(){
	angleMode(DEGREES);
	noStroke();
	rectMode(CENTER);
	fill("#005566")
	rect(width/2, height/2, 100, 100, mouseY, mouseY);

}

// shape 7, ellipse and stretches
function myDraggedEllipse(){
	noStroke();
	fill("red");
	ellipse(200,200, 150,dragAmt);
}

function mouseDragged() {
  dragAmt = dragAmt + 5;
  if (dragAmt > height) {
    dragAmt = 200;
  }
 }

// shape 8, quad that chnages color on clicks
 function myQuad(){
 	fill(0,value, 255);
 	quad(800,100, 900,200,950,400,759,600);
 }

 function mousePressed(){
 	if (value == 0) {
    value = 255;
  } 
  else {
    value = 0;
  }
 }

 // shape(s) 9, cluster of random points
 function myPoint(){
 	for (let i = 399; i < 600; i++) {
  	    let r = random(100);
  	    stroke("#fcf000");
  	    strokeWeight(5);
  	    point(i,r);
  	   }
 }

//shape 10, rect that appears on click
 function myRectTwo(){
 	noFill();
 	stroke(45,78,140,value);
 	strokeWeight(2);
 	rect(1100,500,100,500);
 }


