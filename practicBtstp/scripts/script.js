let nextBtn = document.querySelector(".next"),
    backBtn = document.querySelector(".back"),
    sliderOld = document.querySelector(".overflow"),
    s1 = document.querySelector(".s1"),
    s2 = document.querySelector(".s2"),
    s3 = document.querySelector(".s3"),
    dots = document.querySelectorAll(".dot"),
    menuBtn = document.querySelector(".fixed"),
    menu = document.querySelector(".mobile-menu");
    
let menuVisble = 0,
    menuBool = false,
    menuTranslate = 0;

    

menuBtn.addEventListener("click", function(){
    menuVisble++;
    
    menu.style.transform = `translateX(${menuTranslate}px)`;
    
    switch(menuVisble){
        case 1:  
        menuTranslate = -1000; 
        break;
        case 2:  
        menuTranslate = 0;
        menuVisble = 0;
        break;
    }
});



$(document).ready(function(){
    const slider = $("#slider-first").owlCarousel({
        loop: true,
        items: 8,
        mouseDrag: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            1:{
                items:1
            }
        }
    });
});
