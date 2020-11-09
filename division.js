class Division{


    constructor(x, y, w, h){


        var options = {
            isStatic: true
        }


        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);

        this.w = w;
        this.h = h;




    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        noStroke();
        fill(240);
        rect(0, 0, this.w, this.h);
        pop();







    }









}