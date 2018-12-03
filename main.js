var canvas = document.getElementById('canvas');
var context= canvas.getContext('2d');

//the clear button to clear canvas
var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function(){
	clearCanvas(canvas);
})


var radius = 5; 
var dragging = false; //basically, is the user pressing the mouse to draw
var lineSelect = false; //is line template selected?
var circleSelect = false; //circle template
var rectSelect = false; //rectangle select

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function(){
	var image = context.getImageData(0,0, canvas.width, canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(image, 0,0);
}

function clearCanvas(c){
	canvas.width = canvas.width;
	context.lineWidth = radius*2;
	setSwatch({target: document.getElementsByClassName('swatch')[0]}); //reseting default color
}

context.lineWidth = radius*2;

var putPoint = function(e){
	if (dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);

	}
}

var drawLine = function(e) {
	context.beginPath();
	context.moveTo(e.clientX, e.clientY);
	context.lineTo(e.clientX, e.clientY);	
	context.stroke();
}

var drawCircle = function(e) {
	context.beginPath();
	context.arc(e.clientX, e.clientY, 50, 0, 2*Math.PI);
	context.stroke();
	context.fill();
}

var drawRect = function(e) {
	context.beginPath();
	context.fillRect(e.clientX, e.clientY, 100, 100);
	context.stroke();
}

var engage = function(e){
	if (lineSelect == true) {
		drawLine(e);
	} else if (circleSelect == true) {
		drawCircle(e);
	} else if (rectSelect == true) {
		drawRect(e);
	} else {
		dragging = true;
		putPoint(e);
	}
}

var disengage = function(){
	dragging = false;
	lineSelect = false;
	circleSelect = false;
	rectSelect = false;
	context.beginPath();
}


document.onkeydown = checkKey;


var temp = 0;

//want to see if curr has changed since the last key press.

//if not the first drawing, put a background
if (temp != 0){ 

}

function checkKey(e) {

    e = e || window.event;

    //left arrow
 	if (e.keyCode == '37') {
        if (temp > 0){
        	temp--;
	        canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			context.putImageData(images[temp], 0,0);
        	context.lineWidth = radius*2;
			console.log("temp: " + temp);
		}
    }
    //right arrow
    else if (e.keyCode == '39') {
    	temp++;

     	if (temp < curr){
	        canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			context.putImageData(images[temp], 0,0);
        	context.lineWidth = radius*2;
			console.log("temp: "  + temp);

		} else {
			clearCanvas(canvas);
		}
    }
  } 

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);



function toggleSideBar(){
	document.getElementById("sidebar").classList.toggle('active');
}
