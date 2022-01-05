$('.owl-carousel').owlCarousel({
  margin: 32,
  autoWidth: true,
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
