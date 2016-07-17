function Object(inX, inY, inSize, inType){

	var x = inX;
	var y = inY;
	var type = inType;
	var color = setColor(inType);
	var objSize = inSize;
	var destroy = false;
	setColor(inType);

	var deleteArray = [];
	var trackArray = [];

	var checked = false;

	var fallSpeed = 20;

	var drawX = inX *gridSize;
	var drawY = inY * gridSize;

	var oldY;


	this.update = function(){
		this.clicked();
		this.moveDown();

	};

	this.draw = function(){

		if(oldY !== undefined){
			this.updateDrawCord();
		}
		
		var corner = 20;
		fill(color);
		rect(drawX, drawY, objSize, objSize, corner, corner, corner, corner);
		fill(255);
		stroke(0);
		strokeWeight(3);
		noFill();
		rect(drawX, drawY, objSize, objSize, corner, corner, corner, corner);
		strokeWeight(1);

		text("x: " + x + " y: " + y, drawX + 10, drawY + 40);

		
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
		
		if(clicked === true && mouseX > x * objSize && mouseX < x * objSize + objSize && mouseY > y * objSize && mouseY < y * objSize + objSize){
			
			deleteArray.push(new Point(x, y));


			for(var i = 0; i < deleteArray.length; i++){
			
		}

			this.crawl(new Point(x, y), true);
			
			
		}
	};

	this.crawl = function(point, firstRun){


			for(var i = 0; i < deleteArray.length; i++){
					if(deleteArray[i].x === point.x && deleteArray[i].y === point.y && firstRun === false){
						console.log("break");
						return;
					}
				}


			
			
			if(this.checkLoc(point.x, point.y - 1)){//UP
				
				


			if(this.checkLoc(point.x, point.y - 1)){//UP
				
				

				deleteArray.push(new Point(point.x, point.y -1));
				boxArray.setChecked(point.x, point.y -1);
				 this.crawl(new Point(point.x, point.y -1), [point.x, point.y -1], false);
				 

			}

			if(this.checkLoc(point.x, point.y + 1)){//DOWN
				deleteArray.push(new Point(point.x, point.y + 1));
				boxArray.setChecked(point.x, point.y +1);
				 this.crawl(new Point(point.x, point.y +1), [point.x, point.y +1], false);
				 
			}
}

			if(this.checkLoc(point.x, point.y + 1)){//DOWN
				deleteArray.push(new Point(point.x, point.y + 1));
				boxArray.setChecked(point.x, point.y +1);
				 this.crawl(new Point(point.x, point.y +1), [point.x, point.y +1], false);
			}	 


			if(this.checkLoc(point.x - 1, point.y)){//LEFT
				deleteArray.push(new Point(point.x -1, point.y));
				boxArray.setChecked(point.x -1, point.y);
				 this.crawl(new Point(point.x -1, point.y), [point.x -1, point.y], false);


			}

			if(this.checkLoc(point.x + 1, point.y)){//RIGHT
				deleteArray.push(new Point(point.x + 1, point.y));
				boxArray.setChecked(point.x +1, point.y);
				 this.crawl(new Point(point.x +1, point.y), [point.x +1, point.y], false);
				 
			}
		

		for(var i = 0; i < deleteArray.length; i++){
			
			boxArray.boxArrayDestroyObject(deleteArray[i].x, deleteArray[i].y);
		}
		deleteArray = [];
	};





	// };

	this.moveDown = function(){


		

		if(y * gridSize + gridSize < gameHeight && boxArray.checkBelow(x, y) === false){
			
			oldY = y;
			y = y +1;


		}

	};


	this.updateDrawCord = function(){

		drawX = x * gridSize;
		if(drawY >= y * gridSize){
			drawY = y * gridSize;
			oldY = y;
		}
		if(oldY < y){
			drawY += fallSpeed;
		}
	};


	this.checkLoc = function(x, y){
		if(y > -1 && x > -1 && x < gameWidth / gridSize  + 1 && y < gameHeight / gridSize  + 1 && boxArray.getTypeFromArray(x, y) === type && boxArray.getChecked(x, y) === false){
			
			return true;
			
		}
		return false;
	};
	
	this.getChecked = function(){
		return checked;
	};

	this.setChecked = function(){
		checked = true;
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