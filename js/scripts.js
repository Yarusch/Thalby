$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout:2000,
        dots:true,
        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});

/* menu settings */

var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
    box.classList.toggle('active');
});