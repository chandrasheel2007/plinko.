class Plinko{

    constructor(x, y, r){

        var options = {

            isStatic: true



        }

        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        this.r = r;



    }

    display(){

        var pos = this.body.position;

        push ();
        translate(pos.x, pos.y);
        fill(255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop ();





    }







    
}