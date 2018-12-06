$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:3,
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  margin:2,
  mouseDrag:true,
  merge:true,
  slideTransition:'.3s'
  });
  

});

$(document).ready(function () {
  $('a').attr('target', 'blank');
  $('.social-button').click(function () {
    $('.social').toggle(500);
    $('.icon-bar').toggleClass('open');
  })
})


