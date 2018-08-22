// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  baseUrl: 'js/',
  shim: {
    bootstrap: ['jquery'],
    bootstrapTable: ['jquery', 'bootstrap'],
    bootboxMin: ['jquery', 'bootstrap'],
    jqueryCookie: ['jquery']
  },
  paths: {
    jquery: 'libs/jquery/jquery-min',
    jqueryCookie: 'libs/jquery.cookie/jquery.cookie',
    bootstrap: 'libs/bootstrap/bootstrap.min',
    bootstrapTable: 'libs/bootstrap-table/bootstrap-table',
    bootboxMin: 'libs/bootbox.min/bootbox.min',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    text: 'libs/require/text',
    router: 'router',
    api: 'config/api',
    ieSet: 'libs/ieSet/ieSet',
    utils: 'libs/utils/utils'
  },
  urlArgs: 'v=0.0.1'
})

require(['router', 'bootstrap', 'ieSet'])
