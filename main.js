var gameWidth = 640;
var gameHeight = 640;

var gridSize = 64;

var colors = ["red", "green", "blue"];

var boxArray;

var clicked = false;

var frames = 0;

function setup(){

	createCanvas(gameWidth, gameHeight);
	boxArray = new BoxArray();
	boxArray.createBoard();
	//frameRate(5);

	



}

function update(){
	frameCounter();
	//console.log("frames: " + frames);
	boxArray.boxArrayUpdate();
	clicked = false;
	//boxArray.getArray();


}

function draw(){

	background(255);
	update();
	//grid();

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

function Point(x, y){
	this.x = x;
	this.y = y;
}



function mouseClicked(){
	clicked = true;
	return false;
}

function frameCounter(){
	if(frames >= 60){
		frames = 0;
	}
	frames++;
}