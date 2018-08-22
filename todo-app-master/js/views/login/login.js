define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/login/login.html',
  'bootboxMin',
  './scripts'
], function($, _, Backbone, statsTemplate, bootbox) {
  'use strict'
  var path = location.pathname + '#/'
  var el = $('#login')
  var AppView = Backbone.View.extend({
    el: el,
    statsTemplate: _.template(statsTemplate),

    initialize: function() {
      if (location.href.indexOf('login') > -1 && $.cookie('username')) {
        location.href = '/todo-app-master/#/'
      } else {
        //用来绑定事件
        this.render()
      }
    },
    render: function() {
      //执行
      this.$el.off()
      this.$el.html(this.statsTemplate())
      this.$el.on('click', '#submit', this.submit)
      return this
    },
    //提交
    submit: function(e) {
      var username = el.find('.form-username').val()
      var password = el.find('.form-password').val()
      var tip = ''
      if (username == '') {
        tip = '请输入用户名'
      } else if (password == '') {
        tip = '请输入密码'
      }
      if (tip) {
        bootbox.alert({
          message: tip,
          size: 'small',
          backdrop: true
        })
        return
      }
      $.cookie('username', username)
      location.href = path
    }
  })

  return AppView
})
