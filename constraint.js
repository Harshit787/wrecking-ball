class Con{

constructor(bodyA,pointB){

var options = {

    bodyA:bodyA,
    pointB:pointB,
    stiffness:1,
    length:200
}

this.pointB = pointB    

this.sling = Constraint.create(options)
World.add(world,this.sling)         

}

    display(){

var pointA= this.sling.bodyA.position
var pointB = this.pointB

push();

strokeWeight(4)
stroke("white")     
line(pointB.x,pointB.y,pointA.x,pointA.y)
pop();

        
    }

}