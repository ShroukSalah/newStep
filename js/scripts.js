// =================== wow script ===================
new WOW().init();

// ==================================================
$(document).ready(function() {
    // ================== works ===============================
    $('#ourWorks').owlCarousel({
            mouseDrag: true,
            touchDrag: true,
            loop: true,
            center: true,
            margin: 20,
            nav: true,
            dots: false,
            rtl: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            // animateIn: 'fadeIn', // add this
            // animateOut: 'fadeIn', // and this
            stagePadding: 30,
            // smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            },
            // onDragged: function(e) {
            //     $(e.target).hide().fadeIn("slow");
            // },

        })
        //========================= get the name of uploaded file=========================
    $('input[type="file"]').change(function() {
        var value = $("input[type='file']").val();
        $('.js-value').text(value);
    });
});

// =========================== vertical testmonial slider ===========================
var swiper = new Swiper(".testimonial", {
    direction: "vertical",
    loop: false,
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
    parallax: true,
    // speed: 5000,
    // autoplay: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// ===================== works slider =======================
// var swiper = new Swiper(".works", {
//     effect: "coverflow",
//     grabCursor: true,
//     loop: true,
//     speed: 2000,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     autoplay: {
//         delay: 5000,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });