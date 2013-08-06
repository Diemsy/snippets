/**
  * Validation using regular expressions
  */

/* EMAIL */
function isEmailAddress(value) {
  var pattern = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
  return pattern.test(value); 
}
/* PHONE */
function isPhoneNumber(value) {
  var pattern = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
  return pattern.test(value); 
}
/* ZIP CODE */
function isZipCode(value) {
  var pattern = new RegExp(/^\d{5}(-\d{4})?$/);
  return pattern.test(value); 
}
/* NUMBER */
function isNumber(value) {
  var pattern = new RegExp(/^[0-9]+$/);
  return pattern.test(value); 
}
/* LETTERS */
function isAlpha(value) {
  var pattern = new RegExp(/^[A-Za-z]+$/);
  return pattern.test(value); 
}
/* ALPHANUMERIC */
function isAlphanumeric(value) {
  var pattern = new RegExp(/^[0-9a-zA-Z]+$/);
  return pattern.test(value); 
}

(function($) {
  var value = $('.js-input').val();
  
  isEmailAddress(value); // true or false
  
  isPhoneNumber(value); // true or false
  
  isZipCode(value); // true or false
  
  isNumber(value); // true or false
  
  isAlpha(value); // true or false
  
  isAlphanumeric(value); // true or false
	
})(jQuery);
