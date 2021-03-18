var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0
  
  ground=createSprite(0,400,1000,10)
  
   monkey=createSprite(80,310,15,15)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  
  

  }
function draw() {
  background("yellow")
  
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY= -9
  }
  monkey.velocityY = monkey.velocityY + 0.2
  monkey.collide(ground)
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
  fill("black") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50)
  fill("black") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50)
  
 
 drawSprites()
  
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(120,200)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-2
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-3
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}








