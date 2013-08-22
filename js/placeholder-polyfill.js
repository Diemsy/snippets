/**
  * Placeholder polyfill
  */
(function($) {

  var placeholder = $('[placeholder]');
  
  placeholder.on('focus', function() {
    var input = $(this);
    if (input.val() === input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
    }
  }).on('blur', function() {
    var input = $(this);
    if (input.val() === '' || input.val() === input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
    }
  }).blur();
  
  // Check for values on form submit
  placeholder.parents('form').on('submit', function() {
    $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() === input.attr('placeholder')) {
        input.val('');
      }
    });
  
  });
  
})(jQuery);
