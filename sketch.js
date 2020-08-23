var bullet, wall, thickness;
var speed, weight;
var damage;
function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  bullet = createSprite(50,200,60,30);
  wall = createSprite(1200,200,thickness,height/2);
   
}
function draw() {
  background(150); 

  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;

  if(wall.x-bullet.x < (bullet.width + wall.width)/2){

      bullet.velocityX = 0;

      if(damage<10){
        bullet.shapeColor = "green";
      } 

      if(damage>10){
        bullet.shapeColor = "red"
      }
    }
  drawSprites();
}