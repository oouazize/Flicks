const arrows = document.querySelectorAll('.arrow-container');
const movielist = document.querySelectorAll('.movie-list');

var j = 0;
arrows.forEach((arrow, i) => {
    arrow.addEventListener('click', () => {
        arrow.classList.add("hideMeAfterClick");
        movielist[i].style.transition = "all .8s";
        if (j === 1) {
            movielist[i].style.transform = "translateX(0%)";
            arrow.style.transform = "translateX(0em)";
            j = 0;
        }
        else {
            movielist[i].style.transform = "translateX(-100%)";
            arrow.style.transform = "translateX(174.6em)";
            j++;
        }
    });
});