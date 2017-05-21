// js 字典的实现
function Dictionary() {
  var items = {};
  var length = 0;

  /**
   * @description 向字典中添加新元素
   * @param key
   * @param value
   */
  this.set = function(key, value) {
    items[key] = value;
    length++;
  };

  /**
   * @description 如果某个键值存在于这个字典中,则返回 true ,反之则返回 false
   * @param key
   * @returns {boolean}
   */
  this.has = function(key) {
    return key in items;
  };

  /**
   * @description 通过使用键值来从字典中移除键值对应的数据值
   * @param key
   * @returns {boolean}
   */
  this.remove = function(key){
    if (this.has(key)) {
      delete items[key];
      length--;
      return true;
    }
    return false;
  };

  /**
   * @description 通过键值查找特定的数值并返回。
   * @param key
   * @returns {undefined}
   */
  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  /**
   * @description 将字典所包含的所有数值以数组形式返回。
   * @returns {Array}
   */
  this.values = function () {
    var results = [];
    for (var k in items) {
      if (this.has(k)) {
        results.push(items[k]);
      }
    }
    return results;
  };

  /**
   * @description 将字典所包含的所有键名以数组形式返回。
   * @returns {Array}
   */
  this.keys = function () {
    var results = [];
    for (var key in items) {
      results.push(key);
    }
    return results;
  };

  /**
   * @description 返回字典所包含元素的数量
   * @returns {number}
   */
  this.size = function () {
    return length;
  };

  /**
   * @description 将这个字典中的所有元素全部删除。
   */
  this.clear = function () {
    items = {};
  };

  /**
   * @description 获取存储的键值对
   * @returns {{}}
   */
  this.getAll = function () {
    return items;
  }
}