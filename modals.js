var about = document.getElementById('about-content');
var template = document.getElementById('template-content');
var add = document.getElementById('add-content');
var span = document.getElementsByClassName("close")[0];


//all the options
const listItems = document.getElementsByTagName('li');

//premade templates
listItems[0].addEventListener('click', function() {
    template.style.display = "block";

});

// //add custom template
// listItems[1].addEventListener('click', function() {
//     add.style.display = "block";
// });

//about
listItems[1].addEventListener('click', function() {
    about.style.display = "block";
});

span.onclick = function() {
    template.style.display = "none";
  // add.style.display = "none";
    about.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == template) {
        template.style.display = "none";
    } else if (event.target == about) {
        about.style.display = "none";
    } else if (event.target == add) {
        add.style.display = "none";
    }
}