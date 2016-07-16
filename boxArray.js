

function BoxArray(){

	var boxArray = [];

	this.createBoard = function(){
		for(var r = 0; r < gameWidth / 64; r ++){
			boxArray[r] = [];

			for(var c = 0; c < gameHeight / 64; c ++){
				var color = Math.floor(Math.random() * (colors.length - 0) );
				// console.log("x " + r * 64);
				// console.log("y " + c * 64);
				
				// console.log("color: " + color);
				
				boxArray[r].push(new Object(r, c, gridSize, colors[color]));
			}
		}
	};

	this.boxArrayUpdate = function(){
		for(var r = boxArray.length -1; r >= 0; r --){
			
			
			for(var c = boxArray[r].length -1; c >= 0; c --){
				//console.log("r: " + r + " c: " + c);

				if(boxArray[r][c].getDestroy() === true){
					boxArray[r].splice(c, 1);
					break;
				}
				boxArray[r][c].update();
				this.checkTop();
				
			}
		}
	};

	this.boxArrayDraw = function(){
		for(var r = 0; r < boxArray.length; r ++){
			
			
			for(var c = 0; c < boxArray[r].length; c ++){

				boxArray[r][c].draw();
				
			}
		}
	};

	this.getTypeFromArray = function(x, y){
		
		//console.log("type called");

		for(var r = boxArray.length -1; r >= 0; r --){
			
			
			for(var c = boxArray[r].length -1; c >= 0; c --){

				
					
				if(boxArray[r][c].getX() === x && boxArray[r][c].getY() === y ){
					
					return boxArray[r][c].getType();
				}
				
				
			}
		}
	};

	this.getChecked = function(x, y){
		
		//console.log("type called");

		for(var r = boxArray.length -1; r >= 0; r --){
			
			
			for(var c = boxArray[r].length -1; c >= 0; c --){

				
					
				if(boxArray[r][c].getX() === x && boxArray[r][c].getY() === y ){
					
					return boxArray[r][c].getChecked();
				}
				
				
			}
		}
	};

	this.setChecked = function(x, y){
		
		//console.log("type called");

		for(var r = boxArray.length -1; r >= 0; r --){
			
			
			for(var c = boxArray[r].length -1; c >= 0; c --){

				
					
				if(boxArray[r][c].getX() === x && boxArray[r][c].getY() === y ){
					
					return boxArray[r][c].setChecked();
				}
				
				
			}
		}
	};

	this.boxArrayDestroyObject = function(x, y){
		// console.log("boxarray destroy called");

		for(var r = boxArray.length -1; r >= 0; r --){
			
			
			for(var c = boxArray[r].length -1; c >= 0; c --){

				
					
				if(boxArray[r][c].getX() === x  && boxArray[r][c].getY() === y ){
					boxArray[r][c].setDestroy();
					
					// console.log(boxArray);
					//console.log(boxArray[x][y].getDestroy());
					return;
				}
				
				
			}
		}
		
	};

	this.checkBelow = function(x, y){
		//console.log("checkBelow called");
		for(var r = boxArray.length -1; r >= 0; r --){
			
			
			for(var c = boxArray[r].length -1; c >= 0; c --){
				if(boxArray[r][c].getX() === x && boxArray[r][c].getY() === y + 1){
					//console.log("box is below");
					return true;
				}
			}
		}

		return false;		
	};

	this.checkTop = function(){
		//console.log("top called");

		for(var r = boxArray.length -1; r >= 0; r --){
			
			
			//for(var c = boxArray[r].length -1; c >= 0; c --){
				
				if(boxArray[r].length < gameHeight / gridSize){
					// console.log("add");
					// return;

					var color = Math.floor(Math.random() * (colors.length - 0) );
					boxArray[r].push(new Object(r, 0, gridSize, colors[color]));
					break;
				}
			//}
		}

		
	};



















}