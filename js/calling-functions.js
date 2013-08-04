/* --------------------------------------------------
  EXECUTE FUNCTION
-------------------------------------------------- */
function CallMe() {
  // do something
  return;
}
(function($) {
  // Call function
  CallMe();
})(jQuery);

/* --------------------------------------------------
  EXECUTE FUNCTION ON EVENT
  & PREVENT DEFAULT BEHAVIOR
-------------------------------------------------- */
function CallMe(e) {
  // do something
  e.preventDefault();
  return;
}
(function($) {
  // Cache your event listener
  var button = $('.js-button');
  // On event
  button.on('click', CallMe);
})(jQuery);

/* --------------------------------------------------
  EXECUTE FUNCTION ON EVENT,
  PASS ITSELF AS AN OBJECT & DO MORE WORK
-------------------------------------------------- */
// Define function, pass object
function CallMe(obj) {
  // do something with 'obj'
  return;
}
(function($) {
  // Cache your event listener
  var button = $('.js-button');
  // On event
  button.on('click', function(e) {
    CallMe(this);
    // do more work
    e.preventDefault();
  });
})(jQuery);

/* --------------------------------------------------
  EXECUTE FUNCTION ON EVENT
  & PASS OBJECTS
-------------------------------------------------- */
// Define function, pass object
function CallMe(e) {
  // do something with 'e.data.firstMessage'
  // do something with 'e.data.secondMessage'
  e.preventDefault();
  return;
}
(function($) {
  // Cache your event listener
  var button = $('.js-button');
  var messageOne = 'hi';
  var messageTwo = 'bye';
  // On event
  button.on('click', {firstMessage: messageOne, secondMessage: messageTwo}, CallMe);
})(jQuery);
