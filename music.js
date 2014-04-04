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
      picurl: 'http://m.alicdn.com/x/639438d0-bbe5-11e3-a0d0-7d83b42879dc.jpg',
      url: 'http://douban.fm'
    });
  }

  webot.set('music', {
    'pattern': reg_music_cmd,
    'handler': do_search
  });

}