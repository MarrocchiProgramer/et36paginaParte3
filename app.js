function toggleCardButtonColors() {
    const card = document.querySelector('.card');
    const button = document.querySelector('.boton-verFotos');

    card.classList.toggle('card-hover');
    button.classList.toggle('boton-hover');
}

// const carousel = document.getElementById('carouselExample-proyectos1');
// const carouselItems = carousel.querySelectorAll('.carousel-item');

// // Función para actualizar el tamaño y posición de las tarjetas
// function updateCardSizes() {
//   carouselItems.forEach((item, index) => {
//     const tarjeta = item.querySelector('.my-tarjeta');

//     if (index === 0) {
//       tarjeta.classList.add('my-tarjeta-large');
//       tarjeta.classList.remove('my-tarjeta-small');
//     } else {
//       tarjeta.classList.remove('my-tarjeta-large');
//       tarjeta.classList.add('my-tarjeta-small');
//     }
//   });
// }

// // Evento para actualizar las tarjetas al cambiar de slide
// carousel.addEventListener('slid.bs.carousel', () => {
//   updateCardSizes();
// });

// // Llamada inicial a la función para configurar el tamaño y posición inicial
// updateCardSizes();


var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 100,
        modifier: 1,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});



const sliderPrev = document.getElementById('slider-prev');
const sliderNext = document.getElementById('slider-next');
const slider = document.querySelector('.tranding-slider');

// Agregar el evento click a los elementos de flecha y fondo
sliderPrev.addEventListener('click', () => {
    swiper.slidePrev(); // Mover el carrusel hacia la izquierda
});

sliderNext.addEventListener('click', () => {
    swiper.slideNext(); // Mover el carrusel hacia la derecha
});



window.addEventListener('scroll', function () {
    var message = document.getElementById('message');
    var pageHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    if (scrollPosition > (pageHeight / 2 - windowHeight / 2)) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
});

