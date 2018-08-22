define(['underscore', 'backbone'], function(_, Backbone) {
  var TodoModel = Backbone.Model.extend({
    // Default attributes for the todo.
    defaults: {
      content: 'empty todo...',
      done: false,
      order: 0
    },

    // Ensure that each todo created has `content`.
    initialize: function() {
      console.log(this.defaults.content)
      if (!this.get('content')) {
        this.set({ content: this.defaults.content })
      }
    }
  })
  return TodoModel
})
