
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var backgroundImg;
var x,y;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10;

function preload()
{
   //preload the images here
backgroundImg=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(1000, 700);

  engine = Engine.create()
	world = engine.world;

  x=random(10,980);

  

  snow1=new Snow(x,0,50,50)
  snow2=new Snow(x,0,50,50)
  snow3=new Snow(x,0,50,50)
  snow4=new Snow(x,0,50,50)
  snow5=new Snow(x,0,50,50)
  snow6=new Snow(x,0,50,50)
  snow7=new Snow(x,0,50,50)
  snow8=new Snow(x,0,50,50)
  snow9=new Snow(x,0,50,50)
  snow10=new Snow(x,0,50,50)

  Engine.run(engine);
  
}


function draw() {
background(backgroundImg);



    snow1.display();
    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();
    snow6.display();
    snow7.display();
    snow8.display();
    snow9.display();
    snow10.display();
  drawSprites()

}
