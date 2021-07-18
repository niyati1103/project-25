class Paper extends Baseclass {
	constructor(x,y,r) {
		super(x,y,20)
		this.Images= loadImage("paper.png")
		   
	   }
	   
	 };
	
	 function keyPressed () {
		if(keyCode === UP_ARROW) {
			
			Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-80})
		}
	  }
//C:\Users\Becky\Desktop\Projects\project-c25-template-main\Paper.js