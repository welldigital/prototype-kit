(function ($j) {
  
    Menu = Class.extend({
  
      settings: {
        headerSelector: '.js-header',
        triggerSelector: '.js-menu-button',
        triggerTextSelector: '.js-menu-button-text',
        menu: '.js-primary-navigation'
      },
  
      init: function () {
        
        // Bind container and bail out if nothing
        this.$trigger = $j(this.settings.triggerSelector);
        
        if(this.$trigger.length > 1) {
          return
        } else {

          this.$triggerText = this.$trigger.find(this.settings.triggerTextSelector);
          this.$header = $j(this.settings.headerSelector);
          this.$menu = $(this.settings.menu);
          
          // Bind app settings
          this.app = new App();
  
          // Toggle menu on click of trigger
          $j(this.settings.triggerSelector).on('click', $j.proxy(function (e) {
            this.toggleMenu(e);
          }, this));

        }


      },
  
      toggleMenu: function(e) {
        e.preventDefault();
        if (this.$trigger.hasClass(this.app.clsOpen)) {
          this.$trigger.attr('aria-expanded', false);
          this.$header.removeClass(this.app.clsOpen);
          this.$menu.removeClass(this.app.clsOpen);
          this.$trigger.removeClass(this.app.clsOpen);
          this.$triggerText.text(this.$triggerText.data().closedText);
          $.lockScroll(false);
        } else {
          this.$header.addClass(this.app.clsOpen);
          this.$trigger.addClass(this.app.clsOpen);
          this.$menu.addClass(this.app.clsOpen);
          this.$trigger.attr('aria-expanded', true);
          this.$triggerText.text(this.$triggerText.data().openText);
          $.lockScroll(true);
        }
      }
    });
  
    $j().ready(function () {
      var menu = new Menu();
    });
  
  })(window.jQuery);
