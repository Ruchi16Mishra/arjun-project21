class cr {
    constructor (x, y, w, h) {
        this.xP = x;
        this.yP = y;
        this.width = w;
        this.height = h;

        let cr_options = {
            isStatic : true,
        };

        this.body = Bodies.rectangle (this.xP, this.yP, this.width, this.height, cr_options);
        World.add (world, this.body);
    }

    show () {
        var pos = this.body.position;

        push ();

        rectMode (CENTER);

        fill ("blue");

        stroke ("blue");
        strokeWeight (2);

        rect (pos.x, pos.y, this.width, this.height);

        pop ();
    }
}