var f;
var m;

function setup() {
  createCanvas(800,400);
f= createSprite(20, 200, 50, 50);
m = createSprite(600,200,50,50);
f.velocityX = 5
m.velocityX = -5
f.shapeColor = "red"
m.shapeColor = "red"
f.debug=true
m.debug=true
}

function draw() {
  background(0,0,0); 
 bounceoff(m,f);
  drawSprites();
}

