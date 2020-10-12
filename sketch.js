var speed,weight,thickness,damage;
var bullet,wall;
function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,40,10);
  speed = random(223,500);
  bullet.velocityX = speed;
  weight = random(30,52);
  thickness = random(22,83); 
  wall = createSprite(1500,200,70,200);
 
 }

function draw() {
  background("black");  
  drawSprites();

  if(hasCollided(bullet,wall)){
  
    bullet.velocityX = 0;  
    damage = 0.5*weight*speed*speed/2500;

    
  if(damage>500)
  {
    wall.shapeColor = color("green");
    fill("white"); 
    textSize(20);
    text("green", 200,200);
  }

  if(damage<500)
  {
    wall.shapeColor = color("red");
   fill("white"); 
   textSize(20);
   text("red", 200,200);
    }
  }
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}