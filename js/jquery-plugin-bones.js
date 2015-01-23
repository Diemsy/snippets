;(function($, window, document, undefined) {

  /**
   * Description goes here.
   * @title Plugin Name
   * @author Your Name
   */
  
  /**
   * The top-level namespace.
   * @namespace MyPlugin
   */

  var MyPlugin = MyPlugin || {};

  /**
   * Initialize plugin
   * @param {object} container DOM object
   * @param {object} options Custom options
   */

  MyPlugin.init = function(container, options) {
    this.container = container;
    this.options = $.extend({}, $.fn.myPluginName.options, options);
    this.myMethod();
  };

  /**
   * My method description
   */

  MyPlugin.myMehtod = function() {
    alert('I was called!');
  };

  /**
   * Object.create shim
   */

  if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
      function F() {}
      F.prototype = obj;
      return new F();
    };
  }
  
  /**
   * Extend jQuery with own method
   * @param {object} options Plugin options
   */

  $.fn.myPluginName = function(options) {
    return this.each(function() {
      var plugin = Object.create(MyPlugin);
      plugin.init(this, options);
    });
  };
  
  /**
   * Default options
   */

  $.fn.myPluginName.options = {
    optionOne: true,
    optionTwo: false
  };
  
})(jQuery, window, document);

/**
 * Initiate plugin on document ready
 */

;(function($) {
  $('.js-element').myPluginName({
    optionOne: false, // default true
    optionTwo: true // default false
  });
})(jQuery);
