var express = require('express');
var webot = require('weixin-robot');

var app = express();

webot.set('hi', '你好');


webot.set('subscribe', {
  pattern: function(info){
    return info.is('event') && info.param.event === 'subscribe';
  },

  handler: function(info){
    return '欢迎订阅微信机器人';
  }
});


webot.set('test', {
  pattern: /^test/i,
  handler: function(info, next) {
    next(null, 'roger that!')
  }
});


webot.watch(app, {token: '32liketoken', path:'/wechat' });

app.listen(3000);