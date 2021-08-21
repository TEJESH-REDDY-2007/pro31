class Pin{
    constructor(x, y) {
      var options = {
        isStatic:true,
        'restitution':0.8,
        'friction':1.0,
        'density':0.1
      }
      this.body = Bodies.circle(x, y, 8, options);
      World.add(world, this.body);
    }
    
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      ellipse(pos.x, pos.y, 8);
    }
  
  }