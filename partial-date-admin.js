(function ($) {

backdrop.togglePartialDateCustomSettings = function (val) {
  if (val == 'custom') {
    $('#partial-date-custom-component-settings').show();
  }
  else {
    $('#partial-date-custom-component-settings').hide();
  }
}

backdrop.behaviors.partialDateCustomFormatToogle = {
  attach: function (context, settings) {
    $('#partial-date-format-selector', context).each(function () {
      backdrop.togglePartialDateCustomSettings($(this).val());
    }).change(function () {
      backdrop.togglePartialDateCustomSettings($(this).val());
    });
  }
}

})(jQuery);
