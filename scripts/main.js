let burger = document.querySelector(".burger");
let navList = document.querySelector(".nav__list");

function openNav() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
}

burger.addEventListener("click", openNav);

const modalPolicy = document.getElementById("policy");
const openPolicy = document.getElementById("openPolicy");
const closePolicy = document.getElementById("closePolicy");
const modalTerms = document.getElementById("terms");
const openTerms = document.getElementById("openTerms");
const closeTerms = document.getElementById("closeTerms");
openTerms.onclick = () => {
  modalTerms.style.display = "flex";
};
closeTerms.onclick = () => {
  modalTerms.style.display = "none";
};
openPolicy.onclick = () => {
  modalPolicy.style.display = "flex";
};
closePolicy.onclick = () => {
  modalPolicy.style.display = "none";
};
window.onclick = (event) => {
  if (event.target == modalTerms) {
    modalTerms.style.display = "none";
  }
  if (event.target == modalPolicy) {
    modalPolicy.style.display = "none";
  }
};
