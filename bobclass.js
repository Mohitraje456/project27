class Bob {
    constructor(x, y, radius) {
      
      var options = {
        isStatic : true
        
      }

      this.body = Matter.Bodies.circle(x,y,radius,[options])
      this.width =70
      this.height = 70
      World.add(world,this.body)

  }
  display(){
    var pos = this.body.position
    
        var angle = this.body.angle;
    
    push();
    translate (pos.x,pos.y)
    rotate (angle)
    rectMode(CENTER);
    fill("yellow")
    ellipse(35,35,this.width,this.height)
    pop()
    
    };
  }
