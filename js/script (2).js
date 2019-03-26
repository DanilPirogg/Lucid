


$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:true,
        navText: ['',''],
        // navText: [
        //     '<i class="fas fa-chevron-left"></i>',
        //     '<i class="fas fa-chevron-right"></i>'
        // ],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
});

