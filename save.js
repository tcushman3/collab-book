
var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);


var images = [100]; //frames as imageData objects -> this is just the pixel data essentially
var frames = [100]; //frames as images -> needed in order to manipulate objects
var curr = 0;
var temp = 0;

function saveImage(){

	if (curr == 100){
		finishSketch();
	}

	//get rid of the image
	document.getElementById('prevDrawing').style.visability = 'hidden';

	//get the frame
	var currFrame = document.getElementById("canvas");
	var image = context.getImageData(0,0, canvas.width, canvas.height);

	//store in the two arrays
	images[curr] = image; //store in array of imageData objects (may be deleted later)
	var frame = document.getElementById('prevDrawing');
	frame.src = canvas.toDataURL();
    frames[curr] = frame; //store in array of image objects

	canvas.style.background = document.getElementById('prevDrawing');

  	//clear canvas
  	clearCanvas(currFrame);

  	//increment for next save & log
  	curr++;
	temp++;
	//console.log("temp: " + temp);


	//end if images == 100
	if (curr == 99){
		finishSketch();
	}

	//increment frame count
	var frameCount = document.getElementById('frameCount');
	frameCount.innerHTML = curr + 1;
	var numFrame = curr + 1;

	var player = document.getElementById('player');
	if (numFrame%5 == 0){
		if (player.innerHTML == '1'){
			alert('Player 2 turn!'); 
			player.innerHTML = '2';
		} else {
			alert('Player 1 turn!'); 
			player.innerHTML = '1';
		}
	}
}