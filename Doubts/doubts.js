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


// HTML DOM Element offsetTop
function myExample1() {
    var testDiv = document.getElementById("test");
    document.getElementById("ex1").innerHTML = testDiv.offsetTop;
}

function myExample2() {
    var testDiv2 = document.getElementById("test2");
    var demoDiv = document.getElementById("ex2");
    demoDiv.innerHTML =
        "offsetLeft : " + testDiv2.offsetLeft + "<br>offsetTop : " + testDiv2.offsetTop;
}

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myExample3() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


function pageXOff() {
    window.scrollBy(100, 100);
    alert("pageXOffset : " + window.pageXOffset + " , pageYOffset : " + window.pageYOffset);
}