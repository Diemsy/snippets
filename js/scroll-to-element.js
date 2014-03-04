/**
  * Scroll to element
  * --------------------------------------------------
  *
  * Recommended usage
  * <a data-scroll-trigger="area">Trigger</a>
  * <div data-scroll-target="area">Target</div>
  *
  */

;(function($) {

  'use strict';
  
  var container = $('html, body');
  var trigger = $('[data-scroll-trigger]');
  
  trigger.on('click', function(e) {
    e.preventDefault();
    
    var id = $(this).data('scroll-trigger');
    
    container.animate({
      scrollTop: $('[data-scroll-target="' + id + '"]').offset().top
    }, 500);
    
  });
  
})(jQuery);