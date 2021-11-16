const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,bgImage;
var snow = []



function preload(){
  bgImage = loadImage("snow1.jpg")

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
 if(frameCount%50 === 0){
   for(var i = 0;i<200;i++){
     snow.push(new Snow(random(0,800),random(0,800)))
     
   }
 }
  
}


function draw() {
  background(bgImage);  
  Engine.update(engine)

  for(var i=0;i<200;i++){
    snow[i].showSnow()
  }
  drawSprites();
}