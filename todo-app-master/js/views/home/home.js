define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/home/home.html',
  'bootstrapTable',
  'bootboxMin'
], function($, _, Backbone, statsTemplate, bootstrapTable, bootbox) {
  'use strict'
  var path = '/todo-app-master/#/'
  function operateFormatter(value, row, index) {
    //赋予的参数
    return (
      '<div class="btn-group">' +
      [
        '<a class="btn btn-default" href="' +
          path +
          'edit/' +
          row.id +
          '">编辑</a>',
        '<a class="btn btn-danger delete" data-id="' +
          row.id +
          '" href="javascript:void(0)">删除</a>',
        '<a class="btn btn-default" href="javascript:void(0)">开启</a>',
        '<a class="btn btn-default" href="javascript:void(0)">关闭</a>'
      ].join('') +
      '</div>'
    )
  }
  var AppView = Backbone.View.extend({
    el: $('#page-wrapper'),
    statsTemplate: _.template(statsTemplate),
    events: {},
    initialize: function() {
      //用来绑定事件
      this.render()
    },
    render: function() {
      //执行
      this.$el.off()
      this.$el.html(this.statsTemplate())
      this.$table = this.$('#table')
      this.initTable()
      this.deletes()
      this.add()
    },
    //新增
    add: function() {
      this.$el.on('click', '.add', function(e) {
        location.href = path + 'edit'
      })
    },
    //删除
    deletes: function() {
      var that = this
      this.$el.on('click', '.delete', function(e) {
        var id =
          $(e.currentTarget).attr('data-id') ||
          that.$table.bootstrapTable('getSelections')
        var tip = ''
        if (id.length == 0) {
          tip = '请选择一条记录'
        }
        if (tip) {
          bootbox.alert({
            message: tip,
            size: 'small',
            backdrop: true
          })
          return
        }
        bootbox.confirm({
          title: '提示',
          message: '确定删除当前选中记录?',
          backdrop: true,
          buttons: {
            confirm: {
              label: '确定',
              className: 'btn-success'
            },
            cancel: {
              label: '取消',
              className: 'btn-danger'
            }
          },
          callback: function(result) {
            console.log('This was logged in the callback: ' + result)
          }
        })
        console.log(id)
      })
    },
    //初始化表格数据
    initTable: function() {
      var that = this
      var data = [
        {
          id: 1,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 12,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 2,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 3,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 4,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 5,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 6,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 7,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 8,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 9,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 10,
          Name: '张三',
          Sex: '男'
        },
        {
          id: 11,
          Name: '张三',
          Sex: '男'
        }
      ]
      this.$table.bootstrapTable({
        toolbar: '#toolbar', //工具按钮用哪个容器

        queryParams: {}, //传递参数（*）
        sidePagination: 'client', //分页方式：client客户端分页，server服务端分页（*）
        pagination: true,
        pageNumber: 1, //初始化加载第一页，默认第一页
        pageSize: 10, //每页的记录行数（*）
        pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）

        contentType: 'application/x-www-form-urlencoded',

        showRefresh: true, //是否显示刷新按钮
        striped: false, //是否显示行间隔色
        search: true, //搜索
        data: data,
        onPostBody: function(e) {
          //渲染表格成执行事件
        },
        columns: [
          {
            checkbox: true
          },
          {
            field: 'id',
            title: 'ID',
            width: 40,
            align: 'center'
          },
          {
            field: 'Name',
            title: '名字'
          },
          {
            field: 'Sex',
            title: '性别'
          },
          {
            field: 'operate',
            title: '操作',
            width: '250',
            align: 'center',
            formatter: operateFormatter //自定义方法，添加操作按钮
          }
        ],
        rowStyle: function(row, index) {
          var classesArr = ['', '']
          var strclass = ''
          if (index % 2 === 0) {
            //偶数行
            strclass = classesArr[0]
          } else {
            //奇数行
            strclass = classesArr[1]
          }
          return { classes: strclass }
        } //隔行变色
      })
    }
  })
  return AppView
})
