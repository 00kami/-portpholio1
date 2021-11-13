jQuery('.header-humberger').on('click', function (e) {
    e.preventDefault();

    jQuery('.header-humberger').toggleClass('is-active');
    jQuery('.humbarger__contents').toggleClass('is-active');
    jQuery('.humberger__background').toggleClass('is-active');

    e.preventDefault();

    return false;
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 400,
    width: 274,
    spaceBetween: 20,
    loopedSlides: 6,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },

    breakpoints: {
        767: {
            spaceBetween: 40,
            width: 400,
        }
    },

    // 自動再生設定
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
        slidesPerView: 2.75,
        grabCursor: true,
    },


});

jQuery('.accordion__head').click(function () {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.accordion__icon').toggleClass('is-open');
});

