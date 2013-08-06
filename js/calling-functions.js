/**
  * Execute function
  */
function CallMe() {
  // do something
  return;
}
(function($) {
  // Call function
  CallMe();
})(jQuery);

/**
  * Execute function on event
  */
function CallMe(e) {
  e.preventDefault();
  return;
}
(function($) {
  var button = $('.js-button');
  button.on('click', CallMe);
})(jQuery);

/**
  * Execute function on event and pass itself
  */
function CallMe(obj) {
  return;
}
(function($) {
  var button = $('.js-button');
  button.on('click', function(e) {
    CallMe(this);
    e.preventDefault();
  });
})(jQuery);

/**
  * Execute function on event and pass data
  */
function CallMe(e) {
  // 'e.data.firstMessage'
  // 'e.data.secondMessage'
  e.preventDefault();
  return;
}
(function($) {
  var button = $('.js-button');
  var messageOne = 'hi';
  var messageTwo = 'bye';
  button.on('click', {firstMessage: messageOne, secondMessage: messageTwo}, CallMe);
})(jQuery);
