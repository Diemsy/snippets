/* --------------------------------------------------
  SELF EXECUTING FUNCITONS
-------------------------------------------------- */
// On document ready execute this function
$(document).ready(function() {
  // do something
});

// On document ready execute this function - shorthand
$(function() {
  // do something
});

// Self executing anonymous JS function
(function() {
  // do something
})();

// Self executing anonymous JS function with $ as jQuery
(function($) {
  // do something
})(jQuery);

// Self executing anonymous JS function with full security protection
(function($, window, document, undefined) {
  // do something
})(jQuery, window, document);