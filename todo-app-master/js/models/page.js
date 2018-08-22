define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict'
  var page = new Backbone.Model.extend({
    constructor: function() {
      console.log('模型')
    },
    destory: function() {
      console.log(1)
    }
  })
  return page
})
