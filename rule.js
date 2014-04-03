/*!
 * @author hk1k
 * @module defaultRules
 */

module.exports = function(webot) {

    webot.set('/^(hi|hello|hey|���|����)([\.!����]*)/i', function(){
      var now = new Date();
      var hour = now.getHours();
      var timeSecene = (hour < 12) ? '����' : ((hour < 18) ? '����' : '����');
      if(Math.random() > 0.5){
        return ['���','�������鲻��!','��ʲô���԰ﵽ�����','��ʲô�£�'];
      }
      if(hour >= 22 || hour < 2){
        return '��ô���˻���˯?';
      }else if(hour < 5){
        return '���簡���컹û���أ�';
      }else{
        return timeSecene + '��';
      }
    });

    webot.set('/^(�ǳ�|��|����)*(л|лл|��л|л��|лл��|л��|лл��|лл��|л��|лл��|л��|�����)([\.!����]*)/', ['�������', '�¿���', '�ܸ��������ô˵']);

    webot.set(['/^(����)*(����|ʲôʱ��|��*ʱ��)([������]*)([?|��]*)$/', 'now'], function(){
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      return '������' + hour + '��' + minute + '��';
    });
    
    ['/^(����)*(���ڼ�)([������]*)([?|��]*)$/', '����', 'date'].forEach(function(item){
        webot.set(item, function(){
          var now = new Date();
          var day = now.getDay();
          var arr = ['һ', '��', '��', '��', '��', '��', '��'];
          return '��������' + arr[day - 1];
        });
    });

    webot.set('/^(news|����)$/i', function(){
      return '���ڲ�����������';
    });

    webot.set('/^(kfc|�ϵ»�)$/i', function(){
      return '���ڲ��ҿϵ»�';
    });

    webot.set('/^(M|����)$/i', function(){
      return '���ڲ�������';
    });

}