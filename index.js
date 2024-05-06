$(".slider-container").slick({
    dots:true,
    arrows:true,
    infinite:true,
    speed:500,
    slidestoShow:1,
    // adaptiveHeight:true,
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


