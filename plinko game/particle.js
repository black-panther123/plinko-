class Particle{
    constructor(x,y,width,height){
var options={
    restitution:0.4
             }

      this.width=width;
      this.height=height;

      
      this.body=Bodies.rectangle(x,y,width,height,options);
     this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);

    }
    display(){
   
   var pos=this.body.position;
   var angle=this.body.angle;

   push();
   translate(pos.x,pos.y);
   rotate(angle);
  noStroke();
   FileList(this.color);
  // ellipseMode(RADIUS);
   ellipse(0,0,this.width,this.height);
   pop()


   
   


    }
}