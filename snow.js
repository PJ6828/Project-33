class Snow {
    constructor(x,y,r) {
        var options = {
            'restitution':1,
            'density':1,
            'friction':1
        }
        this.body = Bodies.circle(x,y,r)
        this.image = loadImage("snow4.webp");
        this.r = r;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image);
        pop();
    }
}