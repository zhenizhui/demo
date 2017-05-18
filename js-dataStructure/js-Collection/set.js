// 这个类是以ECMAScript 6中 Set 类的实现为基础的
function Set() {
  var items = {};

  /**
   * @description 如果值在集合中,返回 true ,否则返回 false 。
   * @param value
   * @returns {boolean}
   */
  this.has = function (value) {
    return items.hasOwnProperty(value);
    // return value in items; // 也是ok的
  };

  /**
   * @description 向集合添加一个新的项。
   * @param value
   * @returns {boolean}
   */
  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  /**
   * @description 从集合移除一个值。
   * @param value
   * @returns {boolean}
   */
  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  /**
   * @description 移除集合中的所有项。
   */
  this.clear = function () {
    items = {}; // {3}
  };

  /**
   * @description 返回集合中有多少项
   * @returns {number}
   */
  this.size = function () {
    var count = 0;
    for (var prop in items) {
      if (items.hasOwnProperty(prop)) {
        ++count;
      }
    }
    return count;
  };

  /**
   * @description 返回一个包含集合中所有值的数组。
   * @returns {Array}
   */
  this.values = function () {
    var keys = [];
    for (var key in items) {
      keys.push(key);
    }
    return keys;
  };

  /**
   * @description 并集
   * @param otherSet
   * @returns {Set}
   */
  this.union = function (otherSet) {
    var unionSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  /**
   * @description 交集
   * @param otherSet
   * @returns {Set}
   */
  this.intersection = function (otherSet) {
    var intersectionSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };

  /**
   * @description 差集
   * @param otherSet
   * @returns {Set}
   */
  this.difference = function (otherSet) {
    var differenceSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };

  /**
   * @description 子集
   * @param otherSet
   * @returns {boolean}
   */
  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      var values = this.values();
      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  }
}