define(['jquery', 'underscore', 'backbone', 'jqueryCookie'], function(
  $,
  _,
  Backbone
) {
  'use strict'

  var routesName = {
    home: '首页'
  }
  //判断是否登录
  function load(url, routes, query, callback) {
    // console.log(!$.cookie('username'))
    if (url != 'login/login' && $.cookie('username')) {
      document.title = '管理中心'
      $('#login').html('')
      $('.backstretch').hide()
      $('#NavBar,#page-wrapper').show()
      require(['views/common/navBar'], function(AppView) {
        var app_view = new AppView(routes)
      })
    } else {
      location.href = '#/login'
      document.title = '登录'
      $('#NavBar,#page-wrapper')
        .html('')
        .hide()
      $('.backstretch').show()
    }
    url = 'views/' + url
    require([url], function(AppView) {
      var app_view = new AppView({ name: routesName[routes], query: query })
      if (callback) {
        callback(app_view)
      }
    })
  }

  var AppRouter = Backbone.Router.extend({
    initialize: function() {
      //   console.log($.cookie('username'))
    },
    execute: function(callback, args) {
      console.log(args)
    },
    routes: {
      '/': 'home',
      '/edit': 'homeEdit',
      '/edit/:id': 'homeEdit',
      '/app': 'app',
      '/home': 'home',
      '/login': 'login',
      '*actions': 'defaultRoute'
    },
    app: function() {
      // load('app', 'app')
    },
    home: function() {
      load('home/home', 'home')
    },
    homeEdit: function(query, page) {
      load('home/edit', 'home', arguments)
    },
    login: function() {
      load('login/login', 'login')
    },
    defaultRoute: function(e) {
      location.replace('#/')
    },
    setFilter: function(e) {
      console.log(e)
    }
  })
  var app_router = new AppRouter()
  Backbone.history.start()
})
