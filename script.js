const arrowsRight = document.querySelectorAll('.arrow-right-container');
const arrowsLeft = document.querySelectorAll('.arrow-left-container');
const movielist = document.querySelectorAll('.movie-list');

var width = Math.round(innerWidth * 7 / 2880);

var j = 0;
const itemNumber = 14;
var variable = -102;
var generalVar = 0;

arrowsRight.forEach((arrow, i) => {
    arrow.addEventListener('click', () => {
        width = Math.round(innerWidth * 7 / 2880);
        movielist[i].style.transition = "all .8s";
        if (generalVar === 2) variable -= 102;
        generalVar = 0;
        if (itemNumber - (width + j * width) <= 0) {
            movielist[i].style.transform = "translateX(0)";
            j = 0; variable = -102;
        }
        else {
            movielist[i].style.transform = `translateX(${variable}%)`;
            variable -= 102; j++;
        }
        setTimeout(() => {
            (variable === -102) ? arrowsLeft[i].classList.remove('hidden-arrow') : arrowsLeft[i].classList.add('hidden-arrow');}
            , 800);
    });
});

arrowsLeft.forEach((arrow, i) => {
    arrow.addEventListener('click', () => {
        (!generalVar) ? variable += 204 : variable += 102;
        width = Math.round(innerWidth * 7 / 2880);
        movielist[i].style.transition = "all .8s";
        movielist[i].style.transform = `translateX(${variable}%)`;
        generalVar = 2; j--;
        setTimeout(() => {
            (variable === 0) ? arrowsLeft[i].classList.remove('hidden-arrow') : arrowsLeft[i].classList.add('hidden-arrow');}
            , 800);
    });
});

const toggle = document.querySelector('.toggle');
const items = document.querySelectorAll(".navbar, .sidebar, .featured-content, .toggle, .boDy");

toggle.addEventListener('click', () => {
    toggle.children[2].classList.toggle('ball-toggle');
    items.forEach(item => item.classList.toggle('active'));
});