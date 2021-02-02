
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
	// shapes 1 & 2; circle and a square
  noStroke();	
  fill(255);
  ellipse (mouseX, mouseY, 100,100);
  fill('blue');
  rect (pmouseX+1, pmouseY+1, 20,20);

}

function myTriangle(){
	// shape 3 made color changing triangle
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