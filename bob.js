class bob {
     constructor(x, y,diameter) {
       var options = {
        isStatic:false,
           'restitution':0.3,
           'friction':0.5,
           'density':1.2
       }
       this.x=x
       this.y=y
       this.diameter=diameter
       this.body = Bodies.circle(this.x,this.y,this.diameter/2,options);
       
       
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       fill(255,0,255);
       ellipse(0,0,this.diameter,this.diameter)
       pop();
     }
   };