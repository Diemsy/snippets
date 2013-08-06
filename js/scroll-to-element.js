/**
  * Scroll to element
  */

/*
  'data-scroll-start' AND 'data-scroll-end' VALUES MUST MATCH
  
  Trigger
  <a data-scroll-start="area">Trigger</a>
  
  Element
  <div data-scroll-end="area">Element</div>
 */

/**
  * Version 1
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

/**
  * Version 2
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
