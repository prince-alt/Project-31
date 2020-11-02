const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var divisions = [];
var particles = [];
var plinkos = [];
var divisionh = 300;

function setup(){
    var canvas = createCanvas(480,800);

    engine = Engine.create();
    world = engine.world;

    for(var d = 0; d <= width; d = d+80){

        divisions.push(new division (d,height-divisionh/2,10,divisionh));
     
           }

           for(var j = 40; j <=width; j = j+50){

           plinkos.push(new plinko (j,75));

           }

           for(var j = 15; j <=width-10; j = j+50){

            plinkos.push(new plinko (j,175));
    
               }

               for(var j = 40; j <=width; j = j+50){

                plinkos.push(new plinko (j,275));
     
                }
     
                for(var j = 15; j <=width-10; j = j+50){
     
                 plinkos.push(new plinko (j,375));
         
                    }

                    
                    for(var j = 40; j <=width; j = j+50){

                        plinkos.push(new plinko (j,475));
             
                    }
             
           
             

    ground1 = new ground(240,790,500,20);
}

function draw(){

    background("cyan");

    Engine.update(engine);

    for(var g = 0; g < divisions.length; g++){

    divisions[g].display();

    }

    for(var c = 0; c < plinkos.length; c++){

    plinkos[c].display();

    }

    if(frameCount % 60 == 0){

        particles.push(new particle(random (100,400),10,10));
    
           }                 

    for (var a = 0; a < particles.length; a++){

     particles[a].display();

    }

     ground1.display();
     
}