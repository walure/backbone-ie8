define(['underscore', 'backbone', 'models/page'], function(_, Backbone, page) {
  var page = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: page,
    initialize: function() {
      console.log(1)
    },
    destroy: function() {
      console.log(2)
    }
  })
  return page
})
