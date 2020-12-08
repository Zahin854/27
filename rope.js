class rope{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var option= {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
           // stiffness:0.04,
           // length:10
        }
        
        this.bodyB=bodyB;
        this.rope= Constraint.create(option)
        World.add(world,this.rope) 
    }
    display(){
      //  if(this.rope.bodyA){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position.x+this.offsetX
        var pointBy=this.rope.bodyB.position.y+this.offsetY
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB,pointBy)
      //  }
    }
    fly(){
        this.sling.bodyA=null
    }
}