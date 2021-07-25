var track;
var trackImage;
var runner;
var runnerImage;
function preload(){
  //pre-load images
trackImage=loadImage("path.png");
runnerImage=loadImage("runner-1.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
track=createSprite(200,200);
track.addImage(trackImage);
track.scale=1.2;

runner=createSprite(200,200);
runner.addImage(runnerImage);
runner.scale=1.2;

}

function draw() {
  background(0);
if(Path.y<400){
path.y=height/2;
}
track.velocityY=4;
  drawSprite();
}
