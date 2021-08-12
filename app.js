const hamburger = document.getElementsByClassName("hamburger")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

let checker = false;

hamburger.onclick = function(){
    navLinks.classList.toggle("nav-links-display");
}