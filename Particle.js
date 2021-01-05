class Particle{
    constructor(x,y){
    var options={
    restitution:0.4
    
    }
    this.body=Bodies.circle(x,y,20/2,options);
    this.r=20;
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill (this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r/2,this.r/2);
    pop();
    
    
    
    }
    
    
    }