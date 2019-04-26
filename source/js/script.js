$(document).ready(function(){
  $('.slider').slick({
    dots: true,
  });
  $(".slider").on('afterChange', function(event, slick, currentSlide){
   $("#cp").text(currentSlide + 1);
});
});
