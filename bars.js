class Bars {
    constructor(x, y) {
        var options = {isStatic:true}
        this.body = Bodies.rectangle(x, y, 6, 220, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("white")
        rectMode(CENTER)
        rect(pos.x, pos.y, 6, 220)
    }
}