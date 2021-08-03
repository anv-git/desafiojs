
const menu = document.querySelector(".menu__navegation");
const nav = document.querySelector(".menu__navegation--anchor");


menu.addEventListener('click', () => {
  nav.classList.toggle('slide');
  document.querySelector(".menu__navegation--position").classList.toggle("active");
  });