/**
  * Throttle
  * --------------------------------------------------
  * 
  * Recommended usage
  * throttle(function() {
  *   // do work son!
  * }, 800);
  */

;(function(global) {

  'use strict';
  
  var throttle = function (func, delay) {
    var timer = null;
    
    return function () {
      var context = this;
      var args = arguments;
      
      clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(context, args);
      }, delay || 500);
    };
  };
  
  global.throttle = throttle;
  
})(this);