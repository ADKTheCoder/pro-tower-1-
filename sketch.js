const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 polygon= Bodies.circle(100,200,20)
 World.add(world,polygon)

 var option={
   bodyA:polygon,
   pointB:{x:100,y:150},
   length:50,
   stiffness:0.05,
 }
 rope=Constraint.create(option)
 World.add(world,rope)

 //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  stroke("white")

  if ( rope.bodyA){
    line (rope.bodyA.position.x,rope.bodyA.position.y,rope.pointB.x,rope.pointB.y)
  }
  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

 imageMode (CENTER)
 image(polygon_img,polygon.position.x,polygon.position.y,40,40)

}
function mouseDragged(){
   Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 rope.bodyA=null
}
