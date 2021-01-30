class Paper{
    constructor(x,y,radius){
        var bp={
            isStatic: false,
            restitution:1.0,
            friction:0.5,
            density:1.2
        }
        this.radius=radius
        this.image=loadImage("paper.png");
        this.body =Bodies.circle(x,y,radius,bp);
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode (CENTER)
       image(this.image, 0,0, this.radius*4, this.radius*4);
         //angleMode(RADIANS);

        rotate(angle);
        /*ellipseMode(RADIUS)
        fill("purple"); 
  circle(0,0,this.radius);*/
    pop();
}
}