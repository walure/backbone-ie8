define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/home/edit.html',
  'bootstrapTable'
], function($, _, Backbone, statsTemplate, bootstrapTable) {
  'use strict'
  var path = location.pathname + '#/'

  var AppView = Backbone.View.extend({
    el: $('#page-wrapper'),
    statsTemplate: _.template(statsTemplate),
    events: {},
    initialize: function(options) {
      this.options = options
      //用来绑定事件
      this.render()
    },
    render: function() {
      //执行
      this.$el.html(this.statsTemplate({ options: this.options }))
    }
  })
  return AppView
})
