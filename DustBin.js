
class DustBin{
    constructor(x1, y1, w1, h1, x2, y2, w2, h2, x3, y3, w3, h3){
        var options = {isStatic: true};
        this.body1 = Bodies.rectangle(x1, y1, w1, h1, options);
        this.body2 = Bodies.rectangle(x2, y2, w2, h2, options);
        this.image = loadImage("dustBinImage.png");
        this.body1Width = w1;
        this.body1Height = h1;
        this.body2Width = w2;
        this.body2Height = h2;
        this.body3Width = w3;
        this.body3Height = h3;
        this.x3 = x3;
        this.y3 = y3;
        World.add(world, this.body1);
        World.add(world, this.body2);
    }

    display(){
        fill(255, 0);
        rectMode(CENTER);
        rect(this.body1.position.x, this.body1.position.y, this.body1Width, this.body1Height);
        rect(this.body2.position.x, this.body2.position.y, this.body2Width, this.body2Height);
        imageMode(CENTER);
        image(this.image, this.x3, this.y3, this.body3Width, this.body3Height);
    }

}