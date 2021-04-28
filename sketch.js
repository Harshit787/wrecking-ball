const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

function setup(){

    createCanvas(800,600);

    engine = Engine.create();
    world = engine.world

    ground1 = new Ground(400,550,800,50)

    box1 = new Box(600,500,50,50)
    box2 = new Box(650,500,50,50)
    box3 = new Box(700,500,50,50)

    box4 = new Box(625,450,50,50)
    box5 = new Box(675,450,50,50)

    box6 = new Box(650,400,50,50)

    ball1 = new Ball(200,200,40)   
    
    con = new Con(ball1.body,{x:200,y:100})
}

function draw(){

    background(0);
    Engine.update(engine);

    ground1.display();

    box1.display();
    box2.display();
    box3.display();

    box4.display();
    box5.display();

    box6.display();

    ball1.display();

    con.display();
}

function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}






