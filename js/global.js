const navbar = document.querySelector("#navbar");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcons = document.querySelector(".hamburger-btn");
const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");
const navMobile = document.querySelector(".nav-mobile")

// Window Scroll Navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        navbar.style.position = "sticky";
        navbar.style.top = "0";
        navbar.style.transition = "1s linear"
    }
    else navbar.style.position = "relative";
}

// Search Input
searchIcon.addEventListener("click", () => {
    searchInput.style.width = "250px"
    searchInput.focus();
})

// Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
    if (hamburgerIcons.className.includes("fa-bars")) {
        hamburgerIcons.classList.remove("fa-bars");
        hamburgerIcons.classList.add("fa-x");
        navMobile.style.top = "60px"
    }
    else {
        hamburgerIcons.classList.add("fa-bars");
        hamburgerIcons.classList.remove("fa-x");
        navMobile.style.top = "-550px"
    }
})







