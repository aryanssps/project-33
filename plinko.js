class Plinko {
    constructor(x, y) {
        var options = {
            'isStatic': true
        }
        this.x = x;
        this.y = y;

        this.body = Bodies.circle(x, y, 7.5, options);
        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        fill(216, 254, 133);
        rectMode(CENTER);
        ellipse(pos.x, pos.y, 15, 15);
        pop();
    }
}