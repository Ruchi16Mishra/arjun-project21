class Ground {
    constructor (x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 

        let options = {
            isStatic:true,
        };

        this.body = Bodies.rectangle (this.x, this.y, this.w, this.h, options);
        World.add (world, this.body);
    }

    show() {
        var pos = this.body.position;

        push ();
        rectMode (CENTER);
        
        stroke ("green");
        strokeWeight (6);

        fill ("green");
        rect (pos.x, pos.y, this.w, this.h)

        pop ();
    }
}

