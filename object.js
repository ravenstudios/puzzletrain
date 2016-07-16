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

	var deleteArray = [];
	var trackArray = [];

	var checked = false;

	// console.log("inX " + x);
	// console.log("inY " + y);

	this.update = function(){
		this.clicked();
		this.moveDown();

	};

	this.draw = function(){
		var corner = 15;
		fill(color);
		rect(x * objSize, y * objSize, objSize, objSize, corner, corner, corner, corner);
		fill(255);
		stroke(0);
		strokeWeight(3);
		noFill();
		rect(x * objSize, y * objSize, objSize, objSize, corner, corner, corner, corner);

		//text("x: " + x + " y: " + y, x * gridSize + 20, y * gridSize + 20);
		
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
			//boxArray.boxArrayDestroyObject(x, y);
			deleteArray.push(new Point(x, y));

			for(var i = 0; i < deleteArray.length; i++){
			//console.log("x: " + deleteArray[i].x + " y: " + deleteArray[i].y);
			//boxArray.boxArrayDestroyObject(deleteArray[i].x, deleteArray[i].y);
		}
			this.crawl(new Point(x, y), true);
			
			
		}
	};

	this.crawl = function(point, firstRun){

		console.log("px: " + point.x + " py: " + point.y);
		// while(array.length > 0 ){

			for(var i = 0; i < deleteArray.length; i++){
					if(deleteArray[i].x === point.x && deleteArray[i].y === point.y && firstRun === false){
						console.log("break");
						return;
					}
				}

		

		
	
			//deleteArray.concat(array); //merges every returned array

			var currentLoc = point;

			console.log("pclx: " + currentLoc.x + " pcly: " + currentLoc.y);

			//deleteArray.push(new Point(currentLoc.x, currentLoc.y));

			if(this.checkLoc(currentLoc.x, currentLoc.y - 1)){//UP
				
				//return [currentLoc.x, currentLoc.y -1];
				deleteArray.push(new Point(currentLoc.x, currentLoc.y -1));
				boxArray.setChecked(currentLoc.x, currentLoc.y -1);
				 this.crawl(new Point(currentLoc.x, currentLoc.y -1), [currentLoc.x, currentLoc.y -1], false);
				 //boxArray.boxArrayDestroyObject(new Point(currentLoc.x, currentLoc.y -1));
			}

			if(this.checkLoc(currentLoc.x, currentLoc.y + 1)){//DOWN
				deleteArray.push(new Point(currentLoc.x, currentLoc.y + 1));
				boxArray.setChecked(currentLoc.x, currentLoc.y +1);
				 this.crawl(new Point(currentLoc.x, currentLoc.y +1), [currentLoc.x, currentLoc.y +1], false);
				 //boxArray.boxArrayDestroyObject(new Point(currentLoc.x, currentLoc.y +1));
			}

			if(this.checkLoc(currentLoc.x - 1, currentLoc.y)){//LEFT
				deleteArray.push(new Point(currentLoc.x -1, currentLoc.y));
				boxArray.setChecked(currentLoc.x -1, currentLoc.y);
				 this.crawl(new Point(currentLoc.x -1, currentLoc.y), [currentLoc.x -1, currentLoc.y], false);
				 boxArray.boxArrayDestroyObject(new Point(currentLoc.x -1, currentLoc.y));
			}

			if(this.checkLoc(currentLoc.x + 1, currentLoc.y)){//RIGHT
				deleteArray.push(new Point(currentLoc.x + 1, currentLoc.y));
				boxArray.setChecked(currentLoc.x +1, currentLoc.y);
				 this.crawl(new Point(currentLoc.x +1, currentLoc.y), [currentLoc.x +1, currentLoc.y], false);
				 //boxArray.boxArrayDestroyObject(new Point(currentLoc.x +1, currentLoc.y));
			}
		//}

		for(var i = 0; i < deleteArray.length; i++){
			console.log("from the bottom x: " + deleteArray[i].x + " y: " + deleteArray[i].y);
			boxArray.boxArrayDestroyObject(deleteArray[i].x, deleteArray[i].y);
		}
		deleteArray = [];
	};






	// this.check = function(x, y){
	// 		this.checkUp(x, y - 1);
	// 		this.checkDown();
	// 		this.checkLeft();
	// 		this.checkRight();
	// 		//this.check();
	// };

	this.moveDown = function(){


		

		if(y * gridSize + gridSize < gameHeight && boxArray.checkBelow(x, y) === false){
			
			y = y + 1;
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
	// this.checkDown = function(){

	// 	//console.log(boxArray.getTypeFromArray(x, y - 1));

	// 	if(y > 0 && boxArray.getTypeFromArray(x, y + 1) === type){
	// 		//console.log("same");
	// 		return true;
	// 	}
	// };

	// this.checkLeft = function(){

	// 	//console.log(boxArray.getTypeFromArray(x, y - 1));

	// 	if(y > 0 && boxArray.getTypeFromArray(x -1, y) === type){
	// 		//console.log("same");
	// 		boxArray.boxArrayDestroyObject(x -1 , y);
	// 		this.checkLeft();
	// 	}
	// };

	// this.checkRight = function(){

	// 	//console.log(boxArray.getTypeFromArray(x, y - 1));

	// 	if(y > 0 && boxArray.getTypeFromArray(x +1, y) === type){
	// 		//console.log("same");
	// 		boxArray.boxArrayDestroyObject(x +1 , y);
	// 		this.checkRight();
	// 	}
	// };
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