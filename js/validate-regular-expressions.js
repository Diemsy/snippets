/**
  * Validation using regular expressions
  */

/**
  * Email address
  * Accepts: valid email addess
  * Notes: http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
  */
function isEmailAddress(value) {
  var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  return pattern.test(value); 
}

/**
  * Phone
  * Accepts: 1231231234, (123) 123-1234, 123-123-1234, 123 123 1234
  */
function isPhoneNumber(value) {
  var pattern = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
  return pattern.test(value); 
}

/**
  * Zip code
  * Accepts: 12345, 12345-1234
  */
function isZipCode(value) {
  var pattern = new RegExp(/^\d{5}(-\d{4})?$/);
  return pattern.test(value); 
}

/**
  * Number
  * Accepts: real full numbers
  */
function isNumber(value) {
  var pattern = new RegExp(/^[0-9]+$/);
  return pattern.test(value); 
}

/**
  * Letters w/out spaces
  * Accepts: 'Kris'
  */
function isAlphaOnly(value) {
  var pattern = new RegExp(/^[A-Za-z]+$/);
  return pattern.test(value); 
}

/**
  * Letters with spaces
  * Accepts: 'Kris Olszewski'
  */
function isAlpha(value) {
  var pattern = new RegExp(/^[A-Za-z ]+$/);
  return pattern.test(value); 
}

/**
  * Letters and numbers
  * Accepts: 'Kris123'
  */
function isAlphanumeric(value) {
  var pattern = new RegExp(/^[0-9a-zA-Z]+$/);
  return pattern.test(value); 
}

(function() {
  var value = document.querySelector(".js-input").value;
  
  isEmailAddress(value); // true or false
  
  isPhoneNumber(value); // true or false
  
  isZipCode(value); // true or false
  
  isNumber(value); // true or false
  
  isAlphaOnly(value); // true or false
  
  isAlpha(value); // true or false
  
  isAlphanumeric(value); // true or false
	
})();
