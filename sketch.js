const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bobObject1, bobObject2, bobObject3,bobObject4,bobObject5;
var ground,roof
var rope1, rope2, rope3, rope4,rope5


function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;


  Engine.run(engine);
 // bobObject1= new bob(320,550,40)
//  bobObject2= new bob(360,550,40)
 // bobObject3= new bob(400,550,40)
 // bobObject4= new bob(440,550,40)
  // bobObject5= new bob(480,550,40) 
   //ground= new Ground(width/2,600,width,20)
   roof= new Ground(width/2,height/4,width/7,20)
   bobD=40
   bobx=width/2
   boby=height/4+500
   bobObject1= new bob(bobx-bobD*2,boby,bobD)
   bobObject2= new bob(bobx-bobD,boby,bobD)
   bobObject3= new bob(bobx,boby,bobD)
   bobObject4= new bob(bobx+bobD,boby,bobD)
   bobObject5= new bob(bobx+bobD*2,boby,bobD)

   rope1=new rope ( bobObject1.body,roof.body,-bobD*2,0)
   rope2=new rope ( bobObject2.body,roof.body,-bobD*1,0)
   rope3=new rope ( bobObject3.body,roof.body,0,0)
   rope4=new rope ( bobObject4.body,roof.body,bobD*1,0)
   rope5=new rope ( bobObject5.body,roof.body,bobD*2,0)
   Engine.run(engine)
  }
  
 
  
function draw() {
  background("white")
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 // ground.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})}
}


