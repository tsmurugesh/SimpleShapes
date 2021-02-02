
// Setup code goes here
function setup() {
  createCanvas(1200, 800);
  textSize(40);
  textAlign(CENTER);
 }


// Draw code goes here
function draw() {
  // light pink bg
  background('#ffb2e0');
  myEye();
  myTriangle();

}

function myEye(){
	// 2 shapes; circle and a square
  noStroke();	
  fill(255);
  ellipse (mouseX, mouseY, 100,100);
  fill('blue');
  rect (pmouseX+1, pmouseY+1, 20,20);

}

function myTriangle(){
  stroke(3);
  noFill();
  triangle(500, 230, 370, 400, 550, 600);
  //if (mouseX >= )
}