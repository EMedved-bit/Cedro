$('.owl-carousel').owlCarousel({
  autoWidth: true,
  dots: false,
  responsive: {
    // breakpoint from 0 to 1023
    0: {
      margin: 8,
    },
    // breakpoint from 1024
    1024: {
      margin: 32,
    }
  }
});

$('.page-header__menu-button').on('click', () => {
  $('.popup').addClass('popup__active');
});

$('.popup__close-button').on('click', () => {
  $('.popup').removeClass('popup__active');
});

$('body').on('keyup', (evt) => {
  if (evt.key === 'Escape') {
    $('.popup').removeClass('popup__active');
  }
});
