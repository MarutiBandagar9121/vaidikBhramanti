$(".slider-container").slick({
    dots:true,
    arrows:true,
    infinite:true,
    speed:500,
    slidestoShow:1,
    autoplay:true,
    drag:true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector(".navbar-menue-items-button").addEventListener('click',showMenu);

function showMenu(){
    if(document.querySelector(".navbar-menue-items-button").innerHTML=='<i class="fa-solid fa-xmark fa-2xl" style="color: #3465a4;"></i>'){
        document.querySelector(".navbar-menue-items-button").innerHTML='<i class="fa-solid fa-bars fa-2xl" style="color: #729fcf;"></i>';
        document.querySelector(".navbar-mobile").style.display='none';

    }
    else{
        document.querySelector(".navbar-menue-items-button").innerHTML='<i class="fa-solid fa-xmark fa-2xl" style="color: #3465a4;"></i>';
        document.querySelector(".navbar-mobile").style.display='flex';
    }
}

function optionSelected(){
    document.querySelector(".navbar-menue-items-button").innerHTML='<i class="fa-solid fa-bars fa-2xl" style="color: #729fcf;"></i>';
        document.querySelector(".navbar-mobile").style.display='none';
}

// Get the sticky div
var stickyDiv = document.getElementById("sticky-div");

// Get the offset position of the sticky div
var stickyOffset = stickyDiv.offsetTop;

// Add the sticky class to the div when scrolling
window.onscroll = function() {
  if (window.pageYOffset >= stickyOffset) {
    stickyDiv.classList.add("sticky");
  } else {
    stickyDiv.classList.remove("sticky");
  }
};
