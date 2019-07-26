// menu mobile

$('.icon_hamburger').on('click', function() {
    $('.block_menu, .bg_opacity_body').addClass('isOpen')
})
$(".close_menu").on("click", function() {
    $('.block_menu, .bg_opacity_body').removeClass('isOpen')
})

// Scroll menu
var header = document.querySelector('.header')
var sticky = header.offsetTop
window.onscroll = function() { scroll_menu() }

function scroll_menu() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}

// Back to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 220) {
        $('.page_top').fadeIn(500)
    } else {
        $('.page_top').fadeOut(500)
    }
})
$('.page_top').click(function(e) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 5);
    return false;
})

// Slider

$(document).ready(function() {
    $('.slideshow_container').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    })

})