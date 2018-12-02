
var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);


var images = [100]; //frames as imageData objects -> this is just the pixel data essentially
var frames = [100]; //frames as images -> needed in order to manipulate objects
var curr = 0;
var temp = 0;

function saveImage(){

	//get the frame
	var currFrame = document.getElementById("canvas");
	var image = context.getImageData(0,0, canvas.width, canvas.height);

	//store in the two arrays
	images[curr] = image; //store in array of imageData objects (may be deleted later)
	var frame = new Image();
    frame.src = canvas.toDataURL();
    frames[curr] = frame; //store in array of image objects
   //  frame.onload = function(){
   //  	frame.style.opacity = "0.1"
   //  	context.drawImage(frame, 50, 50, canvas.width/2, canvas.height/2);
  	// }

  	//clear canvas
  	clearCanvas(currFrame);

  	//increment for next save & log
  	curr++;
	temp++;
	console.log("temp: " + temp);


	//end if images == 100
	if (curr == 99){
		finishSketch();
	}

	//increment frame count
	var frameCount = document.getElementById('frameCount');
	frameCount.innerHTML = curr + 1;

}