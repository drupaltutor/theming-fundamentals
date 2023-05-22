(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.dtThemeCountNodes = {
    attach: function (context) {
      var total = 0;
      $(context).find('body article.node').each(function () {
        total++;
      });
      console.log('Found ' + total + ' nodes.');
    }
  };


})(jQuery, Drupal);
