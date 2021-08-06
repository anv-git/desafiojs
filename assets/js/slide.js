
  const menu = document.querySelector(".menu__navegation--position");
  const nav = document.querySelector(".menu__navegation--anchor");
  
  
  menu.addEventListener('click', () => {
    nav.classList.toggle('slide');
    nav.style.margin = 0;
    document.querySelector(".menu__navegation--position").classList.toggle("active");
    });
    

let time = 2500;

function slide1(){
    document.getElementById("photos").src = "assets/images/valtech1.jpg";
    setTimeout("slide2()", time);
}
function slide2(){
    document.getElementById("photos").src = "assets/images/valtech2.jpg";
    setTimeout("slide3()", time);
}
function slide3(){
    document.getElementById("photos").src = "assets/images/valtech3.jpg";
    setTimeout("slide1()", time);
}

