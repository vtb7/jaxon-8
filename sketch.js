var path;
var pathImg;
var surfer_running; surfer;
var power;
var energy;
var invisibleLeft; score; invisibleRight;
_
function preload(){
  //pre-load images
surfer_running=loadAnimation("Runner-1.png","Runner-2.png");
pathImg=loadImage("path.png");

surfer.scale=0.5
}

function setup(){
  
  createCanvas(700,400);
  //score=0;
  path = createSprite(200,600);
  path.addImage(pathImg);
  path.x = path.height /2;
  path.velocityY = 4;
  surfer= createSprite(460,350,10,10);
  surfer.addAnimation("running", surfer_running);
  surfer.scale = 0.1;
  
  
  path.scale = 1.2;

  
  
  invisibleLeft = createSprite(200,200);
  invisibleLeft.visible = false;
  invisibleRight = createSprite(200,190);
  invisibleRight.visible = false;
  
 
}
function draw() {
  background("white");

  if(keyDown("space")&& surfer.y >= 100) {
    surfer.velocityY = -4;
  }
  
  //code to reset background
  if (path.y > 400)
  {path.y = height/2;}
  if(keyDown("LEFT_ARROW")) {
    surfer.x=surfer.x+-5
  }
  if(keyDown("RIGHT_ARROW"))
   surfer.x=surfer.x+5
  //surfer.collide(invisibleLeft);
  //surfer.collide(invisibleRight);
  drawSprites();
}
