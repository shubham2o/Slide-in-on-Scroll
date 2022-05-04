// scrollTo()
// EXAMPLE 1
function scrollHor() {
    window.scrollTo(200, 0);
}


// EXAMPLE 2
function scrollVer() {
    window.scrollTo(0, 500);
}


// onScroll
let a = 0;

function onScroll() {
    document.getElementById("demo").innerHTML = a += 1;
}

function onScroll2() {
    document.getElementById("demo2").innerHTML = "You scrolled in div.";
}

document.getElementById("onscroll3").onscroll = function () {
    onScroll3()
};

function onScroll3() {
    document.getElementById("demo3").innerHTML = "You scrolled in div.";
}

document.getElementById("onscroll4").addEventListener("scroll", onScroll4);

function onScroll4() {
    document.getElementById("demo4").innerHTML = "You have scrolled in div.";
}