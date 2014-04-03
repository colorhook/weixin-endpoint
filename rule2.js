/*!
 * @author hk1k
 * @module rule
 */
var rulesPool = {};

var regexpLike = function(string){
  if(!string || !string.match){
    return false;
  }
  var rule = /^\/(.*)\/([igm]*)$/;
  return string.match(rule);
}

var string2Regexp = function(string){
  var rule = /^\/(.*)\/([igm]*)$/;
  var m = string.match(rule);
  return m && new RegExp(m[1], m[2]);
}

var isArray = function(o){
  return Object.prototype.toString.call(o) === '[object Array]';
}
var isFunction = function(o){
  return Object.prototype.toString.call(o) === '[object Function]';
}

var arrayRemove = function(arr, item){
  var index = arr.indexOf(item);
  if (index != -1) {
    return arr.splice(index, 1);
  }
}


/**
 * 增加规则
 * @method add
 * @param {String|Array} rule 规则
 * @param {String|Array} response 响应
 * @return {Object} self module
 */
exports.add = function(rule, response){
  if(isArray(rule)){
    rule.forEach(function(item){
      this.add(item, response);
    }.bind(this));
    return;
  }

  if(!rulesPool[rule]){
    rulesPool[rule] = [];
  }

  if(isArray(response)){
     rulesPool[rule] =  rulesPool[rule].concat(response);
  }else{
     rulesPool[rule].push(response);
  }
  return this;
}

/**
 * 判断是否有特定的规则
 * @method has
 * @param {String} rule 规则
 * @return {Object} rule对应的response
 */
exports.has = function(rule){
  return rulesPool[rule];
}

/**
 * 移除规则
 * @method add
 * @param {String} rule 规则
 * @param {String|Array} response 响应
 * @return {Object} self module
 */
exports.remove = function(rule, response){
  if(!this.has(rule)){
    return;
  }
  if(!response){
    delete rulesPool[rule];
  }
  var responses = rulesPool[rule];
  if(isArray(response)){
    for(var i = 0; i < response.length; i++){
      arrayRemove(responses, response[i]);
    }
  }else{
    arrayRemove(responses, response);
  }
  return this;
}

/**
 * 根据字符来获取匹配的规则
 * @method getRules
 * @param {String} string 输入字符
 * @return {Array} 匹配到的规则
 */
exports.getRules = function(string){
  if(!string || (typeof string != 'string')){
    return [];
  }
  var results = [];
  for(var i in rulesPool){
    if(rulesPool.hasOwnProperty(i)){
      var rule = rulesPool[i];
      if(regexpLike(i)){
        if(string.match(string2Regexp(i))){
          results = results.concat(i);
        }
      }else{
        if(string === i){
          results = results.concat(i);
        }
      }
    }
  }
  //console.log("rule count:" + results.length);
  return results;
}

/**
 * 获取相应
 * @method getResponses
 * @param {String} string 输入字符
 * @return {Array} 匹配到的响应
 */
exports.getResponses = function(string){
  var rules = this.getRules(string);
  var results = [];
  rules.forEach(function(item){
    var responses = rulesPool[item];
    if(isArray(responses) && responses.length){
      results = results.concat(responses);
    }
  });
  //console.log("response count:" + results.length);
  return results;
}

/**
 * 根据字符移除所有匹配
 * @method removeRulesByString
 * @return {Object} self module
 */
exports.removeRulesByString = function(string){
  var rules = this.getRules(string);
  rules.forEach(this.remove.bind(this));
  return this;
}
/**
 * 根据输入来随机响应
 * @method response
 * @param {String} input 输入规则
 * @result {String} 响应结果
 */
exports.response = function(input){
  input = input.trim();
  if(regexpLike(input)){
    input = input.replace(/(^\/|\/([igm]*)$)/i, '');
  }
  var results = this.getResponses(input);
  if(!results){
    return "";
  }
  var response;
  if(results.length <= 1){
    response = results[0] || "";
  }else{
    response = results[Math.floor(Math.random() * results.length)];
  }
  if(isFunction(response)){
    response = response(input);
    if(isArray(response)){
      response = response[Math.floor(Math.random() * response.length)];
    }
  }
  return response || "";
}