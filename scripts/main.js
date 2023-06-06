let burger = document.querySelector(".burger");
let navList = document.querySelector(".nav__list");

function openNav() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
}

burger.addEventListener("click", openNav);
