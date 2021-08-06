const menu = document.querySelector(".menu__navegation--position");
const nav = document.querySelector(".menu__navegation--anchor");


menu.addEventListener('click', () => {
  nav.classList.toggle('slide');
  nav.style.margin = 0;
  document.querySelector(".menu__navegation--position").classList.toggle("active");
  });


  const collapse = document.getElementsByClassName('collapse__box');

  for (i = 0; i<collapse.length; i++){
      collapse[i].addEventListener('click', function(){
          this.classList.toggle('active')
      })
  }