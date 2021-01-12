var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(100, 100, 50, 80);
  fixedRect.shapeColor="green";
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  fixedRect1= createSprite(300,100,50,80);
  fixedRect1.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX
  movingRect.y=mouseY
  if (isTouching(movingRect,fixedRect)) {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  } 
  else if(isTouching(movingRect,fixedRect1)){
    fixedRect1.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else {fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
   fixedRect1.shapeColor="green";

  }
  


  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
      fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    return true

  } else {return false
    
  }

}
