console.log('\'Allo \'Allo!');

$(window).load(function() {
  $('.video--wrapper').fadeIn(1000, function() {
    $('.content').fadeIn(2500, function() {
      // Animation complete
    });
    $('.content--wrapper .content').addClass('animated fadeInUp');
  });
});


// Clip video
$(function(){
  $('.video--wrapper').css({'height':(($(window).height())), 'width':(($(window).width())), 'overflow':'hidden'});
  $(window).resize(function(){
    $('.video--wrapper').css({'height':(($(window).height())), 'width':(($(window).width())), 'overflow':'hidden'});
  });
});