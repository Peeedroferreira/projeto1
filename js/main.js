var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false, // Certifique-se de que o loop está desativado
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: false,
});
