/*!
 * @author hk1k
 * @module rule
 */

var request = require('request');

module.exports = function(webot) {

  var reg_music_cmd = /^(音乐|电台|radio|music|m\s+)\s*(.+)/i;
    
  function do_search(info, next) {
    var q = info.text.match(reg_music_cmd)[3] || "";
    q = q.trim();
    
    if(!q){
      next(null, {
        title: '豆瓣电台',
        description: '豆瓣FM是你专属的个性化音乐收听工具。它简单方便，打开就能收听。在收听过程中，你可以用“红心”、“垃圾桶”或者“跳过” 告诉豆瓣FM你的喜好。豆瓣FM将根据你的操作和反馈，从海量曲库中自动发现并播出符合你音乐口味的歌曲。',
        picurl: 'http://img2.91huo.cn/mm/2012/06/21/dbfm.jpg',
        url: 'http://douban.fm'
      });
      return;
    }

    next(null, {
      title: '豆瓣电台',
      description: '豆瓣FM是你专属的个性化音乐收听工具。它简单方便，打开就能收听。在收听过程中，你可以用“红心”、“垃圾桶”或者“跳过” 告诉豆瓣FM你的喜好。豆瓣FM将根据你的操作和反馈，从海量曲库中自动发现并播出符合你音乐口味的歌曲。',
      picurl: 'http://img2.91huo.cn/mm/2012/06/21/dbfm.jpg',
      url: 'http://douban.fm'
    });
  }

  webot.set('music', {
    'pattern': reg_music_cmd,
    'handler': do_search
  });

}