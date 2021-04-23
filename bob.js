class bob
{
    constructor(x)
    {
        this.x=x;
        this.y=500;
        this.d=100;

        this.body=Bodies.circle(this.x,this.y,this.d/2);
        World.add(world,this.body);
        
        
    }

    display()
    {
        push ();
        fill (rgb(34,139,34));
        translate (this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        
        circle(0,0,this.d);
        pop ();
    }

}