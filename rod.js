class rod 
{
   constructor()
   {
       this.x=450;
       this.y=50;
       this.width=500;
       this.height=50;

       this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true});
       World.add(world,this.body);


       
   }


   display()
   {
       fill (rgb(165,42,42));
       rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y,500,50);
   }

}