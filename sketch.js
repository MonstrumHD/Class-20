var car,wall;
var speed,weight;
var Deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX = speed
}

function draw() {
  background('black');

  Deformation = (0.5*weight*speed*speed/22500)

  if(isTouching(car,wall)) {
    car.velocityX = 0;
    car.x = wall.x-55;
    if(Deformation < 100){
      car.shapeColor = color(0,255,0)
    }
    if(Deformation >= 100&&Deformation <= 180){
      car.shapeColor = color(230,230,0)
    }
    if(Deformation > 180){
      car.shapeColor = color(255,0,0)
    }
  }

  drawSprites();
}