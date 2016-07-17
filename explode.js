function ExplodeHandler(){ //this object handles explosions and is needed so that the main draw function can be used to call all explosions

	var exploadArray = [];
console.log("array from load " + exploadArray);
	this.update = function(){

		if(exploadArray.length > 0){

			//console.log(exploadArray.length);
			for(var i = exploadArray.length - 1; i > 0; i--){

				//console.log(exploadArray);

				if(exploadArray.getArrayLength <= 0){
					exploadArray.splice(i, 1);
					console.log("exploadArray splice ");
					break;
				}
					//console.log("i: " + i);
					//console.log("testLength " + exploadArray[0].getArrayLength());
					exploadArray[i].update();
			}
			
			
		}
	};

	this.draw = function(){


		for(var i = exploadArray.length -1 ; i > 0; i--){
			if(exploadArray[i].getArrayLength > 0){
				console.log("DRAW");
				exploadArray[i].draw();
			}
			exploadArray[i].draw();
		}
	};

	this.pushExplosion = function(x, y, color){
		//console.log("push called " + x + " " + y);

		exploadArray.push(new Explode(x, y, color));
		//console.log(exploadArray);
		//console.log("testLength " + exploadArray[0].getArrayLength());
	};
}

function Explode(x, y, color){

	partArray = [];
	var arraySize = Math.floor(Math.random() *(8 - 4) + 4);
	

	for(var i = 0; i < arraySize; i ++){
		var size = Math.floor(Math.random() * (gridSize / 2 + gridSize / 4) + gridSize / 4);
		partArray.push(new Partical(x, y, size, color));
	}

	

	this.update = function(){

		for(var j = partArray.length - 1; j > 0; j--){
			if(partArray[j].getLife() < 0){
				partArray.splice(j, 1);

				break;
			}
			partArray[j].update();
		}

		

		

	};

	this.draw = function(){

		for(var i = partArray.length - 1; i > 0; i--){
			partArray[i].draw();
			console.log("drawing partical");
		}
	};

	this.getArrayLength = function(){
		return partArray.length;
	};
}


function Partical(x, y, size, color){
	

	var speed = Math.floor(Math.random());
	var life = 50;
	var randomLimit = 10;
	var halfLife = life / 3;

	var xDir = Math.random() * 10 - 5;
	var yDir = Math.random() * 10 - 5;

	this.update = function(){

		
		x = x + xDir;
		y = y + yDir;

		if(life < halfLife){
			y = y + speed;
		}

		life--;
	};

	this.draw = function(){
		fill(color);
		rect(x, y, size, size);
	};

	this.getLife = function(){
		return life;
	};
}

// var x;
// function setup(){

// 	x = new Explode(200, 200, "rgb(255, 0, 0)");
// 	createCanvas(400, 400);
// 	// frameRate(5);
// }

// function draw(){

// 	background(51);
// 	x.update();
// 	x.draw();

// 	// fill(0, 0, 255);
// 	// rect(0, 0, 50, 50);
// }






