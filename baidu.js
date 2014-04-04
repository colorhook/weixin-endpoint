/*!
 * @author hk1k
 * @module rule
 */

var request = require('request');

module.exports = function(webot) {

  var reg_search_cmd = /^(百度|baidu)(一下|搜索|\s*search)?\s*(.+)/i;

  function do_search(info, next, q) {
    if(!q){
       q = info.text.match(reg_search_cmd)[3];
    }
    request('http://www.baidu.com/s?wd=' + encodeURIComponent(q), function(err, response, res) {
      if (err || !res) return next(null, '现在暂时无法搜索，待会儿再来好吗？');


      res = res.toString();
      
      var reg_h3t = /<h3 class="t">\s*(<a.*?>.*?<\/a>).*?<\/h3>/gi;
      var links = [];
      var i = 1;

      while (true) {
        var m = reg_h3t.exec(res);
        if (!m || i > 5) break;
        links.push(i + '. ' + m[1]);
        i++;
      }


      var ret;
      if (links.length) {
        ret = '在百度搜索到以下结果：\n' + links.join('\n');
        ret = ret.replace(/\s*data-click=".*?"/gi,  '');
        ret = ret.replace(/\s*onclick=".*?"/gi,  '');
        ret = ret.replace(/\s*target=".*?"/gi,  '');
        ret = ret.replace(/<em>(.*?)<\/em>/gi,  '$1');
        ret = ret.replace(/<font.*?>(.*?)<\/font>/gi,  '$1');
        ret = ret.replace(/<span.*?>(.*?)<\/span>/gi,  '$1');
      } else {
        ret = '搜不到任何结果呢';
      }

      next(null, ret);
    });
  }

  webot.set('search', {
    'pattern': reg_search_cmd,
    'handler': do_search
  });
  


  webot.afterReply(function(info, next) {
    if(info.err == 404){
      do_search(info, function(e, ret){
        info.reply = ret;
        next();
      }, info.text);
    }else{
      next();
    }
  });

}