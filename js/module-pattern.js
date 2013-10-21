/**
  * Module pattern
  */
(function(window, document, undefined) {

  'use strict';
  
  // Define module
  var module = (function() {
    
    var privateVar;
    
    // Set private function
    function privateFunction() {
      // ...do work
    }
    
    // Return public function
    return {
      publicFunction: function() {
        // ...do work
        return;
      }
    };
    
  })();
  
  // Call public function
  module.publicFunction();

})(window, document);
