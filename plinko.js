class plinko{

constructor(x,y){

var options = {

isStatic : true

}

this.body = Bodies.circle(x,y,10,options);
this.image = loadImage("plinko.png");
World.add(world,this.body);

}

display(){

imageMode(CENTER);
image (this.image,this.body.position.x,this.body.position.y,40,40);

}


}