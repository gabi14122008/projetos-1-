var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(160, 160, 100, 100);
}

function draw() 
{
  background(30);
drawSprites();
if (keyDown("right")){

  box.x = box.x + 15;
}
if (keyDown("left")){
  box.x = box.x - 15;
}
if (keyDown("down")){
  box.y = box.y + 15;
}
if (keyDown("up")){
  box.y = box.y - 15;
}
}




