$(document).ready(function() {
  $('.accord__title').click(function(event) {
    $(this).next().slideToggle(300);
  });
  $('.accord__title-1').click(function(event) {
    $('.accord__text-1').slideToggle(300);
  });
  $('.accord__title-2').click(function(event) {
    $('.accord__text-2').slideToggle(300);
  });
  $('.accord__title-3').click(function(event) {
    $('.accord__text-3').slideToggle(300);
  });
});
