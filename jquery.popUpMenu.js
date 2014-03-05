(function ($) {
  $.fn.popupmenu = function (whatToPop, inSpeed, outSpeed, delayTime) {
    $(this)
    .mouseenter(function() {
      $(this).children(whatToPop).fadeIn(inSpeed);
    })
    .mouseleave(function() {
      $(this).children(whatToPop)
      .delay(delayTime)
      .fadeOut(outSpeed);
      $(this).children(whatToPop)
      .mouseenter(function() {
        $(this).clearQueue();
      });
    });
  };
}(jQuery));
