$(document).ready(function() {
  $('.FQA__item-title').click(function(event) {
    $(this).next().slideToggle(300);
  });
});
