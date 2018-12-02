var modal = document.getElementById('about');
var span = document.getElementsByClassName("close")[0];


//all the options
const listItems = document.getElementsByTagName('li');

//premade templates
listItems[0].addEventListener('click', function() {
    modal.style.display = "block";
});

//add custom template
listItems[1].addEventListener('click', function() {
    modal.style.display = "block";
});

//about
listItems[2].addEventListener('click', function() {
    modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}