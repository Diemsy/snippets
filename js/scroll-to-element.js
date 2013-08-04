/* --------------------------------------------------
  SCROLL TO ELEMEMT
  
  'data-scroll-start' AND 'data-scroll-end' VALUES MUST MATCH
  
  Trigger
  <a data-scroll-start="area">Trigger</a>
  
  Element
  <div data-scroll-end="area">Element</div>
-------------------------------------------------- */

/*
  VERSION 1
  Accepts: 'data-scroll-trigger' value and speed in ms (default is 500)
*/
function scrollToElement(position, speed) {
  var container = $('html, body');
  container.animate({
    scrollTop: $('[data-scroll-end="' + position + '"]').offset().top
  }, speed || 500);
  return;
}

(function($) {
  var element = $('[data-scroll-start]');
  element.on('click', function(e) {
    var position = $(this).data('scroll-start');
    var speed = 1000;
    scrollToElement(position, speed);
    e.preventDefault();
  });
})(jQuery);

/*
  VERSION 2
  Accepts: speed in ms (default is 500)
*/
function scrollToElement(speed) {
  var container = $('html, body');
  var element = $('[data-scroll-start]');
  element.on('click', function(e) {
    var position = $(this).data('scroll-start');
    container.animate({
      scrollTop: $('[data-scroll-end="' + position + '"]').offset().top
    }, speed || 500);
    e.preventDefault();
  });
  return;
}

(function($) {
  scrollToElement(800);
})(jQuery);
