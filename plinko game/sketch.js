const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var particle=[];
var plinko=[];
var division=[];
var divisionHeight=100;

var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14;
var division1,division2,division3,division4,division5,division6,division7,division8,division9;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  division7=new Division(100,350,20,150);
  division1=new Division(200,350,20,150);
  division2=new Division(300,350,20,150);
  division3=new Division(400,350,20,150);
  division4=new Division(500,350,20,150);
  division5=new Division(600,350,20,150);
  division6=new Division(700,350,20,150);
  division8=new Division(790,350,20,150);
  division9=new Division(10,350,20,150);




plinko1=new Plinko(50,100,30,30)
plinko2=new Plinko(150,100,30,30)
plinko3=new Plinko(250,100,30,30)
plinko4=new Plinko(350,100,30,30)
plinko5=new Plinko(450,100,30,30)
plinko6=new Plinko(550,100,30,30)
plinko7=new Plinko(650,100,30,30)
plinko8=new Plinko(750,100,30,30)


plinko9=new Plinko(50,200,30,30)
plinko10=new Plinko(150,200,30,30)
plinko11=new Plinko(250,200,30,30)
plinko12=new Plinko(350,200,30,30)
plinko13=new Plinko(450,200,30,30)
plinko14=new Plinko(550,200,30,30)
plinko15=new Plinko(650,200,30,30)
plinko16=new Plinko(750,200,30,30)

}

function draw() {
  background(0)
  Engine.update(engine);
  
  
 



if(frameCount%10===0){
  particle.push(new Particle(random(width/2-10,width/2-10),10,10))
}




ground.display();
division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();
division8.display();
division9.display();






plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();

plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();


  drawSprites();
}