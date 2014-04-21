/**
  * Module pattern with loose augmentation
  */
  
var Module = (function (api, window, document, undefined) {

  var counter = 0;
  
  api.get = function () {
    return counter;
  };
  
  api.increment = function (value) {
    counter += value || 1;
    return counter;
  };
  
  api.decrement = function (value) {
    counter -= value || 1;
    if (counter < 0) {
      counter = 0;
    }
    return counter;
  };
  
  api.set = function (value) {
    counter = value;
    return counter;
  };
  
  api.reset = function () {
    counter = 0;
    return counter;
  };
  
  return api;
  
})(Module || {}, window, document);

console.log(Module.get()); // 0
console.log(Module.increment()); // 1
console.log(Module.increment(10)); // 11
console.log(Module.decrement(5)); // 6
console.log(Module.decrement()); // 5
console.log(Module.reset()); // 0
