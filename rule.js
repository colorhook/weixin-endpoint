/*!
 * @author hk1k
 * @module defaultRules
 */
var request = require('request');

module.exports = function(webot) {
    
  webot.set('/^32like$/i', ['请记住我，这就是我的马甲', '点32个赞', '👍']);

  webot.set('/^what.+ the fuck/i', '请说国语 请注意文明用语');
  
  webot.set('/^stupid/i', '请说国语 你很聪明吗');

  webot.set('/^who (r|are) (you|U)/i', '请说国语 我是你的好伙伴');

  webot.set('/^help$/i', '有什么可以帮忙的吗');

  webot.set('/^(\\?|？)+$/', '有什么可以帮忙的吗');

  webot.set('/^[.。(…)\s]+/i', '干嘛无语');

  webot.set('/^[吃饭?\s]+/', ['你是猪啊，就知道吃', '去哪里吃呀']);

  webot.set('/臭?[屁]+/', '你是傻鸟，鉴定完毕');
  
  webot.set('/[请说中文]+/', '我只会说中文');

  webot.set('/^你是(谁|什么)*([?|？]*)/', ["我是智慧与美丽的化身", "请叫我天使", "我是风骚的小秘书", "假装不在"]);

  webot.set('/^(你个|我)*(坏人|靠|小?b|小?p|fuck|坏蛋|笨蛋|sb|二货|2货|傻x|大傻|瓜娃|小样|擦|你妹的?|算?(求|球|逑)|去|傻|傻鸟|煞笔|shabi|傻比|傻逼|神经|(神经|蛇精)病|深井冰|操|草|日|屮|艹)([\.!！。]*)$/i', ["你个傻X", "不许骂人", "你是神经病啊", "深井冰"]);

  webot.set('为人民服务', ["你是活雷锋"]);

  webot.set('毛主席万岁', '万岁万岁万万岁');

  webot.set('雷锋', '请叫我红领巾');

  webot.set('红领巾', '请叫我雷锋');

  webot.set('没事', '你真无聊');

  webot.set('/[^\d]*996[^\d]*/', '不要跟我提996');

  webot.set('/^(笨死了|什么破东西|破东西|鸟?玩意)/', ['我还需要认真学习', '怎样才能变得聪明呢']);

  webot.set('/^(干嘛|怎么了|咋啦|咋了|怎么啦|what|有?什么事)/', '没事，嘻嘻');

  webot.set('/^帅哥/', '我在呢');

  webot.set('/^美女/', '好开心');

  webot.set('爱', '每天说一遍');

  webot.set('喜欢', '我就知道你喜欢我');

  webot.set('喜欢你', '我就知道你喜欢我');

  webot.set('爱你', '我也是');

  webot.set('/^钓鱼岛/', '钓鱼岛是中国的');

  webot.set('/你?好?(nb|nx|牛叉|棒|厉害|赞|great|牛逼)啊?([\\.!！。]*)$/', ['谢谢夸奖', '彼此彼此', '还需要努力']);

  webot.set('/^(哈(哈*)|呵(呵*)|(乖*)|ha(ha)*|he(he)*|ha|he)([\.!！。]*)$/i', ['笑而不语', '干嘛傻笑','😊', '😂']);
  
  webot.set('/^(yes|Y|非常好|love|like|👍|有趣|神奇|xixi|嘻嘻|好玩|不错|支持|点?赞|有点意思|还行|凑合)啊?$/i', ['嘻嘻', '谢谢鼓励']);
  
  webot.set('/^(no|N|弱|弱爆了?|不行|讨厌|垃圾|挫|差劲?|太差了?)呀?$/i', ['伤心', '看来还需要很努力才行']);
  
  webot.set('/^我?好?(伤心|难过|生气|气愤|愤怒|sad)中?/', ['别难过', '开心点', '😢']);
  
  webot.set('/^我?好?(开心|无聊|高兴|快乐|happy)/', ['举杯', '喝一杯', '唱首歌', '😄', '😊']);
  
  webot.set('/你(.*)傻/', ['一点点', '没你聪明', '我哪里错了？']);

  webot.set('/^(百度|baidu)$/i', '你要搜什么?');

  webot.set('/^(腾讯|qq)/i', '你想打企鹅🐧吗?');

  webot.set('/^(alibaba|阿里|阿里巴巴)$/i',['芝麻开门', '告诉我强盗在哪里']);

  webot.set('/(睡觉|晚安|哈欠|打哈欠)/', ['快去休息', '早点休息']);

  webot.set('起床', '再睡一会嘛');

  webot.set('/(早安|早上好|morning)/', ['你真有礼貌']);

  webot.set('/饿/', ['用淘点点叫个外卖', '去外婆家吃个饭吧']);

  webot.set('/渴/', '多喝水');

  webot.set('/好?累了?/', ['早点休息', '玩会游戏吧']);

  webot.set('/^上(班|课)$/', '别迟到');

  webot.set('/^下(班|课)$/', '记得带好东西');

  webot.set('/公交/', '要查找公交路线吗');

  webot.set('清明节', '祝你节日快乐');

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
  
  
  webot.set('/^(日期|date)$/', function(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var str = '今天是' + year + '年' + (month + 1) + '月' + date + '日';
    return str;
  });
  
  ['/^(现在)*(几点|什么时间|的*时间)([了啦拉]*)([?|？]*)$/', 'now', 'time'].forEach(function(item){
    webot.set(item, function(){
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      return '现在是' + hour + '点' + minute + '分';
    });
  });


  ['/^(今天)?天气(怎么样|如何)?([?|？]*)$/i', 'weather'].forEach(function(item){
    webot.set(item, function(){
      return '我想天气不错吧。每天都是好天气!';
    });
  });

  ['/^(今天)*(星期几)([了啦拉]*)([?|？]*)$/', '星期', 'day'].forEach(function(item){
      webot.set(item, function(){
        var now = new Date();
        var day = now.getDay();
        var arr = ['一', '二', '三', '四', '五', '六', '天'];
        return '今天星期' + arr[day - 1];
      });
  });

  webot.set('/^(news|新闻)$/i', function(){
    return '想看新闻啊，请打开网易新闻客户端。';
  });

  webot.set('/^(kfc|肯德基)$/i', function(){
    return '附近没有肯德基';
  });

  webot.set('/^(M|麦当劳)$/i', function(){
    return '请使用淘点点';
  });

  webot.set('/^(starbucks|星巴克)$/i', function(){
    return '想和咖啡吗，我们一起去如何?☕️';
  });

  webot.set('支付宝', function(){
    return ['这是一款好应用', '交个水电煤吧', '手机欠费记得用它充值', '打车用支付宝付款', '便利店可以用支付宝条码支付'];
  });

  webot.set('/余额宝?/', function(){
    return ['你今天的收益有多少', '转入10000压压惊'];
  });


  ['/^看?电影$/', '电影院', '电影票', '新片', '/大片$/', '上映', '好莱坞', '动画片', '/^3d$/i'].forEach(function(item){
    webot.set(item, ['使用豆瓣电影查找最近上映的电影吧', '你去买票，记得用支付宝付款']);
  });

  ['新款', '爆款', '购物', '买东西', '/^shop(ping)?$/i', '淘宝', '天猫', '一淘', '京东', '易讯', '凡客', '当当', '亚马逊', '/^(taobao|tmall|etao|jd|jingdong|xiyun|fanke|dangdang|yamaxun|amazon)$/i'].forEach(function(item){
    webot.set(item, ['打开淘宝客户端购物', '购物上天猫', '又想剁手了？']);
  });

  ['笑话', '讲笑话', '冷笑话'].forEach(function(item){
    webot.set(item, ['我不会讲笑话', '你讲一个试试']);
  });

  ['表情'].forEach(function(item){
    webot.set(item, '随机给你一个表情');
  });

  ['游戏', '小游戏', '手游', '/^game$/i'].forEach(function(item){
    webot.set(item, '找到一些游戏，拿去不谢');
  });

  ['去哪儿', '干什么', '去哪', '去哪玩', '玩什么', '旅游'].forEach(function(item){
    webot.set(item, '已经找到了一些优惠门票');
  });

  ['微信', '来往', '知乎', '微博', '聚划算', '优酷'].forEach(function(item){
    webot.set(item, '这些都是热门的互联网应用');
  });

  ['/苍井空/', '淫荡', '/^打你/', '/sex/', '/(毛|黄)片/', '/^av$/i', '十八禁', '18禁'].forEach(function(item){
    webot.set(item, ['年轻人要学好', '你在说什么，其实我不懂这些。']);
  });

  ['韩剧', '韩片', '韩国'].forEach(function(item){
    webot.set(item, ['这里没有欧巴', '来份泡菜怎么样']);
  });

  ['小日本', '日本', '日本人', '日系'].forEach(function(item){
    webot.set(item, '请不要输入违禁词');
  });
  
  webot.set('image', {
    pattern: function(info) {
      return info.is('image');
    },
    handler: function(info, next) {
      next(null, '图片很好看，可惜我暂时看不懂');
    },
  });

  webot.set('other type', {
    pattern: function(info) {
      return !info.is('text');
    },
    handler: function(info) {
      info.flag = true;
      if (info.is('voice')) {
        return '抱歉，我暂时还「听」不懂人话，请用文字与我交流吧';
      }
      return '暂时还不知道怎么处理这种消息诶...';
    },
  });

  webot.set(/^建议(.{3})/, function(info) {
    info.flag = true;
    return '你的意见已经收到，我们会尽快处理。[微笑]';
  });


}
