class Stone{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

	var options={
		restitution:0.8,
		friction:0.9,
		density:12
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body = Bodies.rectangle(x, y, 20, 20, options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(5);
			stroke("blue");
			fill("green");
			

			pop()
	}

}