const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".ham-menu-wrapper");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})