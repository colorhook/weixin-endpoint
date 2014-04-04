var express = require('express');
var webot = require('weixin-robot');

var app = express();

//delete require.cache[require.resolve('./rule')];
webot.loads('./rule');


webot.set('subscribe', {
  pattern: function(info){
    return info.is('event') && info.param.event === 'subscribe';
  },

  handler: function(info){
    return '欢迎订阅32like';
  }
});




webot.watch(app, {token: '32liketoken', path:'/wechat' });

app.listen(3000);