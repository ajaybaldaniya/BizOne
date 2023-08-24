$(document).ready(function () {
    //  Slider 1
    $('#loop_1').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //  Slider 2
    $('#loop_2').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //  Slider 2
    $('#loop_3').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
  
    
    new WOW().init();
});