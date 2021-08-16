// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")

    } else {
        navbar.classList.remove("sticky");
    }
}




//highlight intro when hovering
const intro_header = document.getElementById("intro-header");
const intro_section = document.getElementById("section-introduction");
intro_section.onmouseover = function () {
    intro_highlight();
};
intro_section.onmouseout = function () {
    intro_default();
};

const nav_home = document.getElementById("nav-home");
const header = document.getElementById("header" );
//header.onmouseover = function() { nav_hover_highlight(nav_home);}
//header.onmouseout = function() {nav_hover_default(nav_home); };

//highlight nav link when section is displayed
function nav_hover_highlight(element){
    element.style.border = "2px inset #f5cb5c";
}

//default nav link when section is displayed
function nav_hover_default(element){
    element.style.border = null;
}

//highlight intro paragraph
function intro_highlight() {
    intro_section.classList.add("intro_hover");
    intro_header.classList.add("intro_hover");
    intro_section.style.background = "#f5cb5c";
    nav_hover_highlight(nav_home);
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//remove highlight intro paragraph
function intro_default() {
    intro_section.classList.remove("intro_hover");
    intro_header.classList.remove("intro_hover");
    intro_section.style.background = null;
    nav_hover_default(nav_home);
}

const nav_experience = document.getElementById("nav-experience" );
const experience_section = document.getElementById("section-experience" );
experience_section.onmouseover =function () {
    nav_hover_highlight(nav_experience);
};
experience_section.onmouseout =function () {nav_hover_default(nav_experience)}

const nav_education = document.getElementById("nav-education" );
const education_section = document.getElementById("section-education" );
education_section.onmouseover =function () {
    nav_hover_highlight(nav_education);
};
education_section.onmouseout =function () {nav_hover_default(nav_education)}

const nav_skills = document.getElementById("nav-skills" );
const skills_section = document.getElementById("section-skills" );
skills_section.onmouseover =function () {
    nav_hover_highlight(nav_skills);
};
skills_section.onmouseout =function () {nav_hover_default(nav_skills)}

const nav_portfolio = document.getElementById("nav-portfolio" );
const portfolio_section = document.getElementById("section-portfolio" );
portfolio_section.onmouseover =function () {
    nav_hover_highlight(nav_portfolio);
};
portfolio_section.onmouseout =function () {nav_hover_default(nav_portfolio)};

