/* --------------------------------------------------
  CALLBACK FUNCTION
-------------------------------------------------- */
// Define function, pass callback argument, return callback function with data
function CallMeBack(callback) {
  var message = "I'm back";
  return callback(message);
}
(function($) {
  // Call function, get callback with data
  CallMeBack(function(data) {
    console.log(data);
  });
})(jQuery);

/* --------------------------------------------------
  CALLBACK FUNCTION ON EVENT
-------------------------------------------------- */
// Define function, pass callback argument, return callback function with data
function CallMeBack(callback) {
  var message = "I'm back";
  return callback(message);
}
(function($) {
  // Cache your event listener
  var button = $('.js-button');
  // On event
  button.on('click', function(e) {
  // Call function, get callback with data
  CallMeBack(function(data) {
    console.log(data);
    });
    // Prevent default browser behavior
    e.preventDefault();
  });
})(jQuery);

/* --------------------------------------------------
  CALLBACK FUNCTION ON EVENT AND PASS OBJECT
-------------------------------------------------- */
// Define function, pass 'this' object and callback argument, return callback function with data
function CallMeBack(obj, callback) {
  console.log(obj);
  var message = "I'm back";
  return callback(message);
}
  (function($) {
  // Cache your event listener
  var button = $('.js-button');
  // On event
  button.on('click', function(e) {
    // Call function, get callback with data
    CallMeBack(this, function(data) {
      console.log(data);
    });
    // Prevent default browser behavior
    e.preventDefault();
  });
})(jQuery);