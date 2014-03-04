/**
  * Callback function
  */
  
function CallMeBack(callback) {
  var message = "I'm back";
  return callback(message);
}

(function($) {
  CallMeBack(function(data) {
    console.log(data);
  });
})(jQuery);

/**
  * Callback function on event
  */
  
function CallMeBack(callback) {
  var message = "I'm back";
  return callback(message);
}

(function($) {
  var button = $('.js-button');
  button.on('click', function(e) {
    CallMeBack(function(data) {
      console.log(data);
    });
    e.preventDefault();
  });
})(jQuery);

/**
  * Callback function on event and pass object
  */
  
function CallMeBack(obj, callback) {
  console.log(obj);
  var message = "I'm back";
  return callback(message);
}

(function($) {
  var button = $('.js-button');
  button.on('click', function(e) {
    CallMeBack(this, function(data) {
      console.log(data);
    });
    e.preventDefault();
  });
})(jQuery);
