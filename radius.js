var setRadius = function(newRadius){
	if (newRadius > maxRad){
		newRadius = maxRad;
	} else if (newRadius < minRad){
		newRadius = minRad;
	} else {
		radius = newRadius;
		context.lineWidth = radius*2;
	}
	radSpan.innerHTML = radius;
}

var minRad = 0.5,
	maxRad = 100,
	defaultRad = 5,
	interval = 2,
	radSpan = document.getElementById('radval'),
	decRad = document.getElementById('decrad'),
	incRad = document.getElementById('incrad');

decRad.addEventListener('click', function(){
	setRadius(radius - interval);
})
incRad.addEventListener('click', function(){
	setRadius(radius + interval);
})

setRadius(defaultRad);
