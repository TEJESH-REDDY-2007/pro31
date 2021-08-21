class Balls {
  constructor(x, y,radius) {

      var options ={
          restitution:0.4
      }

      
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius
      this.color=(color(random(255,0,0), random(0,255,0), random(0,0,255)))
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius,this.radius);
      pop();
  }

};