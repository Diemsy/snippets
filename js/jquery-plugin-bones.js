/**
  * jQuery plugin bootstrap
  */
(function($, window, document, undefined) {
  
  // ECMAScript Object.create shim
  if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
      function F() {}
      F.prototype = obj;
      return new F();
    };
  }
	
  // Plugin logic
  var Plugin = {
    init: function(container, options) {
      var self = this;
      
      self.container = container;
      self.options = $.extend({}, $.fn.pluginName.options, options);
      
      self.cache();
      self.bind();
    }, // end init
    cache: function() {
      var self = this;
      // cache elements
    }, // end cache
    bind: function() {
      var self = this;
      // bind event listeners
    } // end bind
  };
	
  // Create new instance of a plugin
  $.fn.pluginName = function(options) {
    return this.each(function() {
      var plugin = Object.create(Plugin);
      plugin.init(this, options);
    });
  };
	
  // Default plugin options
  $.fn.pluginName.options = {
    optionOne: true,
    optionTwo: false
  };
	
})(jQuery, window, document);

// Call plugin
(function($) {
  $('.js-element').pluginName({
    optionOne: false, // default true
    optionTwo: true // default false
  });
})(jQuery);
