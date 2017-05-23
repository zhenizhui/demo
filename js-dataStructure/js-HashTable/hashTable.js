// js中的散列表

function HashTable() {
  var table = [];

  // 散列函数
  var loseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  };

  this.put = function (key, value) {
    var position = loseHashCode(key);
    console.log(position + '-' + key);
    table[position] = value;
  };

  this.get = function () {
    return table[loseHashCode(key)];
  };

  this.remove = function (key) {
    table[loseHashCode(key)] = undefined;
  }
}