class Rope {
    constructor(bA,bB,offset)
    {

        var options={
            bodyA:bA,
            bodyB:bB,
            stiffness:0.7,
            length:525,
            pointB: {x:offset,y:0},
        }

        this.rope=Constraint.create(options);
        this.offsetX=offset;
        this.offsetY=0;
        World.add(world,this.rope);


    }

    display()
    {
        var a=this.rope.bodyA.position;
        var b=this.rope.bodyB.position;
        strokeWeight(3);
        line (a.x,a.y,b.x+this.offsetX,b.y);
    }
}