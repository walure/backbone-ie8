define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/common/navBar.html'
], function($, _, Backbone, navBarTemplate) {
  'use strict'
  var path = location.pathname + '#/'
  var AppView = Backbone.View.extend({
    el: $('#NavBar'),
    statsTemplate: _.template(navBarTemplate),
    initialize: function(options) {
      this.url = options
      this.render()
    },
    render: function(options) {
      this.$el.off()
      this.$el.html(
        this.statsTemplate({
          path: path,
          url: this.options,
          isActive: this.isActive
        })
      )
      this.events()
    },
    events: function() {
      var that = this
      this.$el.on('click', '.layout', function() {
        $.removeCookie('username')
        location.href = path + 'login'
      })
    },
    isActive: function(name) {
      if (name == this.url) {
        return 'active'
      }
    }
  })
  return AppView
})
