/*!
 * @author hk1k
 * @module rule
 */

var request = require('request');

module.exports = function(webot) {

  var reg_music_cmd = /^(歌曲|听?歌|音乐|电台|radio|music|m)/i;

  function do_search(info, next) {
    next(null, {
      title: '豆瓣电台',
      description: '你可以用“红心”、“垃圾桶”或者“跳过” 告诉豆瓣FM你的喜好。',
      picurl: 'http://img.itcpn.net/uploadImages/2009/308/20091104164607679.jpg',
      url: 'http://douban.fm'
    });
  }

  webot.set('music', {
    'pattern': reg_music_cmd,
    'handler': do_search
  });

}