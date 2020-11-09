class Particle{

    constructor(x, y, r){

        var options = {

            restitution: 0.5,
            friction: 0

            



        }

        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        this.r = r;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));



    }

    display(){

        var pos = this.body.position;

        push ();
        translate(pos.x, pos.y);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop ();





    }







    
}