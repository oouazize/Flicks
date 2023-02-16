const arrows = document.querySelectorAll('.arrow-container');
const movielist = document.querySelectorAll('.movie-list');
const itemNumber = 14;

var width = Math.round(innerWidth*7/2880);

var j = 0;
var variable = -102;
arrows.forEach((arrow, i) => {
    arrow.addEventListener('click', () => {
        console.log(arrow);
        width = Math.round(innerWidth*7/2880);
        movielist[i].style.transition = "all .8s";
        if (itemNumber - (width + j*width) <= 0) {
            movielist[i].style.transform = "translateX(0)";
            j = 0; variable = -102;
        }
        else {
            movielist[i].style.transform = `translateX(${variable}%)`;
            j++; variable -= 102;
        }
    });
});

const toggle = document.querySelector('.toggle');
const items = document.querySelectorAll(".navbar, .sidebar, .featured-content, .toggle, .boDy");

toggle.addEventListener('click', () => {
    toggle.children[2].classList.toggle('ball-toggle');
    items.forEach(item => item.classList.toggle('active'));
});