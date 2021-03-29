var bullet;
var speed;
var weight;
var wall;

function setup() {
  createCanvas(1350,400);
   //canvas.shapeColor = color(80,80,80);

  speed=random(223,321);
  weight=random(400,1500);
  thikness=random(30,52);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = (300,300,300)
  
  wall = createSprite(1200,200,thikness,height/2);
  wall.shapeColor = color (225,225,225);
}

function draw() {
   background(20,20,20);  
  
   bullet.velocityX = speed ; 

   if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var Damage = 0.5*weight*speed*speed/22509;
     if(Damage>10){
      wall.shapeColor="red";
     }
      else {
     }(Damage<10)
      wall.shapeColor="green";
    }
    

  drawSprites();
}

function hasCollided(bullet1,wall1){
    
  bulletRightEdge=bullet1.x +bullet1.width;
  wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
      return true
  }
  return false;

}

