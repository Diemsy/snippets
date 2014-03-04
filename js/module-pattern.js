/**
  * Module pattern with loose augmentation
  */
  
var Module = (function (api, window, document, undefined) {

  var counter = 0;
  
  api.get = function () {
    return counter;
  };
  
  api.increment = function () {
    return ( counter += 1 );
  };
  
  api.decrement = function () {
    return ( counter -= 1 );
  };
  
  api.set = function (value) {
    return ( counter = value );
  };
  
  api.reset = function () {
    return ( counter = 0 );
  };
  
  return api;
  
})(Module || {}, window, document);
