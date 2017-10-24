(function ($j) {

  Accordion = Class.extend({

    settings: {
      container: '.js-accordion',
      slctrTrigger: '.js-accordion-trigger'
    },

    init: function () {

      // Bind container and bail out if nothing
      this.$container = $j(this.settings.container);
      if (this.$container.length < 1) return;

      // Bind app settings
      this.app = new App();

      // Toggle accordion on click of trigger
      $j(this.settings.slctrTrigger, this.$container).on('click', $j.proxy(function (e) {
        this.toggleAccordion(e);
      }, this));

    },

    toggleAccordion: function(e) {

      e.preventDefault();

      var
      $targetTitle    = $j(e.currentTarget),
      $targetContent  = $targetTitle.next('div');

      if ($targetTitle.hasClass(this.app.clsOpen)) {

        $targetTitle.removeClass(this.app.clsOpen);
        $targetContent.removeClass(this.app.clsOpen);

      } else {

        $targetTitle.addClass(this.app.clsOpen);
        $targetContent.addClass(this.app.clsOpen);

      }

    }

  });

  $j().ready(function () {
    var accordion = new Accordion();
  });

})(window.jQuery);
