class ground {

constructor(x,y,width,height){

    var ground_options = {
        isStatic: true
    }

    this.ground = Bodies.rectangle(x,y,width,height,ground_options);
    this.width = width;
    this.height = height;
    World.add(world,this.ground);

}

display(){

var b = this.ground.position;

rectMode(CENTER);
rect(b.x,b.y,this.width,this.height);

}


}