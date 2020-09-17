  var bullet;
  var bullet2;
  var bullet3;
  var ground;
  var ground2;
  var ground3;
  var Wall;




function setup() {
  createCanvas(1600,450);
  Wall=createSprite(10, 200, 10, 1400);
  bullet=createSprite(1500, 50, 10, 10);
  bullet.shapeColor="blue";
  bullet2=createSprite(1500, 200, 10, 10);
  bullet2.shapeColor="red";
  bullet3=createSprite(1500, 350, 10, 10);
  bullet3.shapeColor="green";
  ground=createSprite(200, 100, 2900, 10);
  ground2=createSprite(200, 250, 2900, 10);
  ground3=createSprite(200, 400, 2900, 10);

}

function draw() {
  background(125,155,135);  
  bullet.velocityX=-3;
  bullet2.velocityX=-3;
  bullet3.velocityX=-3;  
  drawSprites();
}