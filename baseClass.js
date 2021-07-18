class Baseclass {
    constructor(x,y,r) {
        var options = {
            restitution:0.3,
            friction:5,
            density:1
            }
            
            this.body=Bodies.circle(x,y,r, options)
            this.Images= loadImage("paper.png")
            World.add(world, this.body);
    
        }
    
        display()
        {
            var rubberpos=this.body.position;		
            push()
            translate(rubberpos.x, rubberpos.y);
            imageMode(CENTER)
            strokeWeight(2);
            stroke("black");
            fill("blue")
            image(this.Images,0,0,60,60);
            pop()
        }
}

