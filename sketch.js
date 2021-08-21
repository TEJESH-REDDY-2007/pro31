const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pins = [];
var balls = [];
var bars = [];
var ground = [];
function setup(){
   createCanvas(400,500);
   engine = Engine.create();
   world = engine.world;

   boder1 = new Borders(400, 250, 10, 550);
   boder2 = new Borders(200, 500, 400, 10);
   boder3 = new Borders(0, 250, 10, 550);
   boder4 = new Borders(200, 0, 400, 10);

   for (var i = 5; i <= width; i = i+66){
       bars.push(new Bars(i, 384));
   }

   for (var i = 38; i <= width; i = i+66){
       ground.push(new Ground(i, 491));
   }

   for (var i = 40; i <=width; i=i+39) {
       pins.push(new Pin(i,75));
    }

    for (var i = 20; i <=width-20; i=i+39) {
        pins.push(new Pin(j,120));
    }

    for (var i = 40; i <=width; i=i+39) {
        pins.push(new Pin(j,165));
    }

    for (var i = 20; i <=width-10; i=i+39) {
        pins.push(new Pin(j,210));
    }
   
}

function draw(){
    background(0);
    Engine.update(engine);

    for (var i = 0; i< ground.length; i++) {
        ground[i].display();
    }

    for (var i = 0; i< bars.length; i++) {
        bars[i].display();
    }
     
    boder1.display();
    boder2.display();
    boder3.display();
    boder4.display();

    

    for (var i = 0; i< pins.length; i++) {
        pins[i].display();
    }

    if (frameCount%60===0){
        balls.push(new Balls(random(width/2-30, width/2+30), 6,6));
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].display();
    }
}