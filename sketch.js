var sea,ship;
var seaImg,shipImg1;
var ship,ship_running,ship_collided;
function preload(){
  seaImg= loadImage("sea.png")
  ship_running=loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png")
 
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.4;

  
  ship = createSprite(80,250,20,50);
  ship.addAnimation("running" ,ship_running);
  edges= createEdgeSprites();
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

 
  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/8;
    sea.y = height;
  }

 
  drawSprites();
}