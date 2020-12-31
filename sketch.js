function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 80);
 fixedRect.shapeColor="pink";
 movingRect = createSprite(300,100,40,60);
 movingRect.shapeColor="pink";

}

function draw() {
  background(255,255,255); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 // console.log(fixedRect.width/2+movingRect.width/2);
  console.log(movingRect.x-fixedRect.x);

  if (movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 
    && movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2 
    && fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2 ) { 
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    
  }
  else{
    fixedRect.shapeColor="pink";
    movingRect.shapeColor="pink";
  }
  
  
  drawSprites();
}