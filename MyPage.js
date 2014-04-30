
$(document).ready(function() {
  $('.button').mouseenter(function() {
    $(this).children('.submenu').slideToggle('fast');
  });
    $('.button').mouseleave(function() {
    $(this).children('.submenu').slideToggle('fast');
  });

});