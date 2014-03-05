/*
 *  jQuery Popup Menu Plugin
 */

(function ($) {
  $.fn.popupmenu = function (options) {
    
    // Add some default options. It will automatically find the first child element if one is not provided.
    var settings = $.extend({
      _what: $(this).next(),
      _in: 'fast',
      _out: 'fast',
      _delay: 300
    }, options );
      
    // Heart of the plugin. Watches for mouse actions on the element and acts accordingly.  
    $(this)
    .mouseenter(function() {
      $(this).children(settings._what).fadeIn(settings._in);
    })
    .mouseleave(function() {
      $(this).children(settings._what)
      .delay(settings._delay)
      .fadeOut(settings._out);
      $(this).children(settings._what)
      .mouseenter(function() {
        $(this).clearQueue();
      });
    });
    return this;
  };
}(jQuery));
