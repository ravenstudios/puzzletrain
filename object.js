// var objSize = 64;
// var x;
// var y;
// var color;

function Object(inX, inY, inSize, inType){

	var x = inX;
	var y = inY;
	var type = inType;
	var color = setColor(inType);
	var objSize = inSize;
	var destroy = false;
	setColor(inType);

	// console.log("inX " + x);
	// console.log("inY " + y);

	this.update = function(){
		this.clicked();
		this.moveDown();

	};

	this.draw = function(){
		fill(color);
		rect(x * objSize, y * objSize, objSize, objSize);
		
	};

	this.getX = function(){
		return x;
	};

	this.getY = function(){
		return y;
	};

	this.getDestroy = function(){
		return destroy;
	};

	this.getType = function(){
		return type;
	};

	this.setDestroy = function(){
		destroy = true;
	};

	this.clicked =function(){
		//console.log("mx: " + mouseX + " my: " + mouseY + " x: " + x + " y: " + y);
		if(clicked === true && mouseX > x * objSize && mouseX < x * objSize + objSize && mouseY > y * objSize && mouseY < y * objSize + objSize){
			//console.log(x + "" + y);
			//color = "rgb(0, 0, 0)";
			//destroy = true;
			// console.log("d = true");
			// console.log(this.getDestroy());
			boxArray.boxArrayDestroyObject(x, y);
			this.checkUp();
			
		}
	};

	this.moveDown = function(){


		//need to fix array index by having all checks use x and y cords NOT XY ARRAY INDEX!!!
		//to move down loop through array and see if a box has a passed in x and y that is below current box. if yes return true; 
		//if function returns false then move down.

		if(y * gridSize + gridSize < gameHeight && boxArray.checkBelow(x, y) === false){
			//console.log("move called");
			y = y + 1;
		}

	};


	this.checkUp = function(){//NEED TO MAKE BOUNDS !!!!!!!!!!!!!!!!!!!!!

		//console.log(boxArray.getTypeFromArray(x, y - 1));

		if(y > 0 && boxArray.getTypeFromArray(x, y - 1) === type){
			//console.log("same");
			boxArray.boxArrayDestroyObject(x, y - 1);
		}
	};
	
}



function setColor(c){

	switch(c){

		case "red":
		return "rgb(255,0,0)";
				

		case "green":
			return "rgb(0,255,0)";
				

		case "blue":
			return "rgb(0,0,255)";
				
	}

}