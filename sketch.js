
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var imageR,img;
var boyo,boy;
function preload()
{
	imageR=loadImage("tree.png")
	boyo=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	 ground=new Ground(width/2,650,width,20);
	 mango1=new Mango(950,260);
	 mango2=new Mango(800,360)
	 mango3=new Mango(900,300)
	 mango4=new Mango(1050,350)
	 mango5=new Mango(950,350);
	 mango6=new Mango(900,400);
	 rock=new Rock(250,550,25);
	 toss=new Shooter(rock.body,{x:250,y:550});

	img=createSprite(950,440,500,450)
	img.addImage(imageR)
	img.scale=0.35

	boy=createSprite(300,600,10,10);
	boy.addImage(boyo)
	boy.scale=0.09


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();
  rock.display();
  ground.display();
  toss.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango1.display()

  detectCollision(rock,mango1)
  detectCollision(rock,mango2)
  detectCollision(rock,mango3)
  detectCollision(rock,mango4)
  detectCollision(rock,mango5)
  detectCollision(rock,mango6)

}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	toss.fly();

}
function detectCollision(lrock,lmango){
	mangoBodyPosition=lmango.body.position;
	rockBodyPosition=lrock.body.position

	var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lrock.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})

	}
}
