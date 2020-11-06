class box {
    constructor(x,y,width,height){

        var box_options ={
            restitution: 0.8,
            friction: 0.3,
            density: 1
        }

    
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.box);
    }

display(){

    var a = this.box.position;
    var c = this.box.angle;

    push();
    translate(a.x,a.y);
    rotate(c)

    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    
}

}
