
const menu = document.querySelector(".menu__navegation--position");
const nav = document.querySelector(".menu__navegation--anchor");


menu.addEventListener('click', () => {
  nav.classList.toggle('slide');
  nav.style.margin = 0;
  document.querySelector(".menu__navegation--position").classList.toggle("active");
  });
  

  let tabBtn = document.querySelectorAll(".tabs .tabs__position--btn");
  let tabContent = document.querySelectorAll(".tabs .tabs__box--content");

  function showContent (contentIndex, colorCode){
        tabBtn.forEach(function(style){
            style.style.backgroundColor = "";
            style.style.color = "";
        });
        tabBtn[contentIndex].style.backgroundColor = "#ccc";
        tabBtn[contentIndex].style.color = "white";
        
        tabContent.forEach(function(style) {
            style.style.display = "none";
        });
        tabContent[contentIndex].style.display = "block";
        tabContent[contentIndex].style.backgroundColor = colorCode;
        
  }

  showContent(0,"#ccc")