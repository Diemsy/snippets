/**
  *  Executing functions
  */
  
// On document ready execute this function
$(document).ready(function() {
  // do something
});

// On document ready execute this function - shorthand
$(function() {
  // do something
});

// Immediately-invoked function expression
(function() {
  // do something
})();

// Immediately-invoked function expression with $ as jQuery
(function($) {
  // do something
})(jQuery);

// Immediately-invoked function expression with full security protection
(function($, window, document, undefined) {
  // do something
})(jQuery, window, document);