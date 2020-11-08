var mR,fR;
function setup() {
  createCanvas(800,400);
  mR= createSprite(400, 200, 50, 50);
  mR.shapeColor="green"
  mR.debug=true;
  fR= createSprite(200, 200, 100, 150);
  fR.shapeColor="green"
  fR.debug=true;
}

function draw() {
  background(0);  
mR.x=mouseX;
mR.y=mouseY;

console.log("Distance between their centers :"+(mR.x-fR.x));
console.log("sum of their half widths "+(mR.width/2+fR.width/2));
if(mR.x-fR.x<=(mR.width/2+fR.width/2) && fR.x-mR.x<=(mR.width/2+fR.width/2) && 
fR.y-mR.y<=(mR.height/2+fR.height/2) && mR.y-fR.y<=(mR.height/2+fR.height/2)){
  fR.shapeColor="red";
  mR.shapeColor="red";
}else{
  fR.shapeColor="green"
  mR.shapeColor="green"
}
  drawSprites();
}