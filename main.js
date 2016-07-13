var gameWidth = 640;
var gameHeight = 640;

var gridSize = 64;

var colors = ["red", "green", "blue"];

var boxArray;

var clicked = false;

function setup(){

	createCanvas(gameWidth, gameHeight);
	boxArray = new BoxArray();
	boxArray.createBoard();
	//frameRate(10);

}

function update(){


	boxArray.boxArrayUpdate();
	clicked = false;
	//boxArray.getArray();


}

function draw(){

	background(100);
	update();
	grid();

	boxArray.boxArrayDraw();
	
	
	
	
}
function grid(){

	stroke(0);
	noFill();
	for(var r = 0; r < gameWidth / 64; r ++){
		for(var c = 0; c < gameWidth / 64; c ++){
		rect(r * 64, c * 64, 64, 64);
		}
	}
}





function mouseClicked(){
	clicked = true;
	return false;
}