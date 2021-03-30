class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

	var options={
		restitution:0.8,
		friction:3,
		density:30
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body = Bodies.rectangle(x, y, 20, 20, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("pink");
			fill("lime");
			

			pop()
	}

}