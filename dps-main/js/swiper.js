const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    effect: "coverflow",
    autoplay: { delay: 2000 },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.back-btn',
    }
});

function add(a, b){
    return a+b;
}

console.log(ad(3+7));
