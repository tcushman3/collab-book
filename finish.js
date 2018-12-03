var finishButton = document.getElementById('finish');


finish.addEventListener('click', finishSketch);

var i = 0;

var done = 0;

function finishSketch(){

	saveImage();

    alert('Your flipBook is complete!'); 

    //hide everything!
    var tool =  document.getElementById('toolbar');
    var side = document.getElementById('sidebar');
    tool.style.display = "none";
    side.style.display = "none";

   context.putImageData(images[0], 0,0); 
   Start();
}	

function Start() {
   myVar = setTimeout(ChangeImages, 250);
}


function ChangeImages(){
	if (i < temp){
		context.putImageData(images[i], 0,0); 
   		 i++;
    Start(1000);
	} else {
   if (confirm("Play Again?")) {
        location.reload();
    } else {
        txt = "You pressed Cancel!";
    }
  }
}

function showImage(i){
		context.putImageData(images[i], 0,0); 
		console.log("setInterval in function: " + i);
}
   	
