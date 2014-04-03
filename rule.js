/*!
 * @author hk1k
 * @module defaultRules
 */
module.exports = function(webot) {

    webot.set('/^(hi|hello|hey|你好|您好)([\.!！。]*)/i', function(){
      var now = new Date();
      var hour = now.getHours();
      var timeSecene = (hour < 12) ? '早上' : ((hour < 18) ? '下午' : '晚上');
      if(Math.random() > 0.5){
        return ['你好','今天心情不错!','有什么可以帮到你的吗？','有什么事？'];
      }
      if(hour >= 22 || hour < 2){
        return '这么晚了还不睡?';
      }else if(hour < 5){
        return '好早啊，天还没亮呢！';
      }else{
        return timeSecene + '好';
      }
    });

    webot.set('/^(非常|很|很是)*(谢|谢谢|感谢|谢了|谢谢你|谢咯|谢谢咯|谢谢啦|谢啦|谢谢拉|谢拉|你真棒)([\.!！。]*)/', ['你真客气', '甭客气', '很高兴你会这么说']);

    webot.set(['/^(现在)*(几点|什么时间|的*时间)([了啦拉]*)([?|？]*)$/', 'now'], function(){
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      return '现在是' + hour + '点' + minute + '分';
    });
    
    ['/^(今天)*(星期几)([了啦拉]*)([?|？]*)$/', '星期', 'date'].forEach(function(item){
        webot.set(item, function(){
          var now = new Date();
          var day = now.getDay();
          var arr = ['一', '二', '三', '四', '五', '六', '天'];
          return '今天星期' + arr[day - 1];
        });
    });

    webot.set('/^(news|新闻)$/i', function(){
      return '正在查找最新新闻';
    });

    webot.set('/^(kfc|肯德基)$/i', function(){
      return '正在查找肯德基';
    });

    webot.set('/^(M|麦当劳)$/i', function(){
      return '正在查找麦当劳';
    });

}