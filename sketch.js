var fixedRect, movingRect;
var go1, go2, go3, go4

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80);
  fixedRect.shapeColor = "aqua";
  movingRect.shapeColor = "aqua";
  go1 = createSprite(100, 100, 50, 50)
  go2 = createSprite(200, 100, 50, 50)
  go3 = createSprite(300, 100, 50, 50)
  go4 = createSprite(400, 100, 50, 50)
  go1.shapeColor = "teal"
  go2.shapeColor = "teal"
  go3.shapeColor = "teal"
  go4.shapeColor = "teal"
}

function draw() {
  background(0);
movingRect.x = mouseX;
movingRect.y = mouseY;

console.log(movingRect.x-fixedRect.x);
 
if (isTouching(movingRect, go1)) {
  go1.shapeColor = "crimson";
  movingRect.shapeColor = "crimson";
} else {
  go1.shapeColor = "aqua";
  movingRect.shapeColor = "aqua";
}

  drawSprites();
}


function isTouching(o1, o2) {

  if(o1.x-o2.x < o1.width/2 + o2.width/2 &&
    o2.x - o1.x < o1.width/2 + o2.width/2 && 
    o2.y - o1.y < o1.height/2 + o2.height/2 &&
    o1.y-o2.y < o1.height/2 + o2.height/2){
 return true
  } else 
    return false
}