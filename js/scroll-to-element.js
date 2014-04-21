/**
  * Scroll to element
  * --------------------------------------------------
  *
  * Recommended usage:
  * <span data-scroll-trigger="{id}">Trigger element</span>
  * <div data-scroll-target="{id}">Target element</div>
  *
  */

;(function($) {

  'use strict';

  $(document).on('click.scrollToElement', '[data-scroll-trigger]', function(e) {

    e.preventDefault();

    var id = $(this).data('scroll-trigger');

    $('html, body').animate({
      scrollTop: $('[data-scroll-target="' + id + '"]').offset().top
    }, 500);

  });

})(jQuery);
