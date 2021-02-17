var fixedRect,movingRect;
var fixedRect1
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
fixedRect1=createSprite(300,200,20,30)
}

function draw() {
  background(100,100,100);  
  if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
    fixedRect.velocityX="5";

   
  } 
  else if(isTouching(fixedRect1,movingRect)){movingRect.shapeColor="green";
  fixedRect1.shapeColor="green";
  fixedRect1.velocityX="-2";

}
else{  movingRect.shapeColor="yellow";
fixedRect.shapeColor="orange";
fixedRect1.shapeColor="blue";}
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)
  console.log(fixedRect.width/2+movingRect.width/2)



  drawSprites();
}

